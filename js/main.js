/* =====================================================================
   SNR NEST — main.js
   Core site controller: navigation, intro, scroll, reveal, counters
   ===================================================================== */
(function () {
  'use strict';

  const $  = (s, ctx = document) => ctx.querySelector(s);
  const $$ = (s, ctx = document) => Array.from(ctx.querySelectorAll(s));
  const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Cinematic intro ---- */
  function initIntro() {
    const overlay = $('#intro-overlay');
    if (!overlay) return;
    if (reducedMotion) { overlay.classList.add('is-done'); document.body.classList.add('intro-complete'); return; }

    const start = () => {
      // total intro ~1.2s
      setTimeout(() => {
        overlay.classList.add('is-done');
        document.body.classList.add('is-ready');
        document.body.classList.add('intro-complete');
        // init scroll reveal after intro
        initScrollReveal();
      }, 1400);
    };

    if (document.readyState === 'complete') start();
    else window.addEventListener('load', start);
  }

  /* ---- Navigation: scrolled state, mobile drawer ---- */
  function initNav() {
    const nav = $('#nav');
    const burger = $('#nav-burger');
    const mobileMenu = $('#mobile-menu');

    if (nav) {
      const onScroll = () => {
        if (window.scrollY > 24) nav.classList.add('is-scrolled');
        else nav.classList.remove('is-scrolled');
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    if (burger && mobileMenu) {
      burger.addEventListener('click', () => {
        const open = mobileMenu.classList.toggle('is-open');
        burger.classList.toggle('is-open', open);
        document.body.classList.toggle('no-scroll', open);
      });
      $$('a', mobileMenu).forEach(a => a.addEventListener('click', () => {
        mobileMenu.classList.remove('is-open');
        burger.classList.remove('is-open');
        document.body.classList.remove('no-scroll');
      }));
    }

    // Mark active link
    const here = location.pathname.split('/').pop() || 'index.html';
    $$('.nav-link').forEach(l => {
      const href = l.getAttribute('href') || '';
      if (href === here) l.classList.add('is-active');
    });
  }

  /* ---- Scroll reveal ---- */
  function initScrollReveal() {
    const els = $$('.sr, .sr-fade, .sr-line');
    if (!('IntersectionObserver' in window) || reducedMotion) {
      els.forEach(el => el.classList.add('is-in'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    els.forEach(el => io.observe(el));

    // Mark body ready for reveal-up / reveal-line / mask-image on hero only
    if (!document.body.classList.contains('is-ready')) {
      document.body.classList.add('is-ready');
    }
  }

  /* ---- Number counters (stats) ---- */
  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || '';
    if (reducedMotion) { el.textContent = target + suffix; return; }
    const dur = 1800;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min(1, (now - start) / dur);
      // easeOutExpo
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  function initCounters() {
    const nums = $$('[data-target]');
    if (!nums.length) return;
    if (!('IntersectionObserver' in window) || reducedMotion) {
      nums.forEach(animateCounter); return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { animateCounter(e.target); io.unobserve(e.target); }
      });
    }, { threshold: 0.4 });
    nums.forEach(n => io.observe(n));
  }

  /* ---- Parallax for images & elements with [data-parallax] ---- */
  function initParallax() {
    if (isTouch || reducedMotion) return;
    const els = $$('[data-parallax]');
    if (!els.length) return;
    let ticking = false;
    const update = () => {
      const vh = window.innerHeight;
      els.forEach(el => {
        const speed = parseFloat(el.dataset.parallax) || 0.15;
        const rect = el.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > vh) return;
        const center = rect.top + rect.height / 2;
        const delta = (center - vh / 2) / vh;
        el.style.transform = `translate3d(0, ${delta * speed * 100}px, 0)`;
      });
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }

  /* ---- Section background transitions (sticky storytelling) ---- */
  function initSectionBg() {
    const sections = $$('[data-bg]');
    if (!sections.length) return;
    const apply = () => {
      const vh = window.innerHeight;
      const center = window.scrollY + vh / 2;
      let active = sections[0];
      sections.forEach(s => {
        const top = s.offsetTop;
        const h = s.offsetHeight;
        if (center >= top && center < top + h) active = s;
      });
      const bg = active.dataset.bg;
      if (bg && document.body.dataset.bg !== bg) {
        document.body.dataset.bg = bg;
      }
    };
    window.addEventListener('scroll', apply, { passive: true });
    apply();
  }

  /* ---- Tabs ---- */
  function initTabs() {
    $$('[data-tabs]').forEach(group => {
      const tabs = $$('[data-tab]', group);
      const panes = $$('[data-pane]', group);
      tabs.forEach(t => t.addEventListener('click', () => {
        const id = t.dataset.tab;
        tabs.forEach(x => x.classList.toggle('is-active', x === t));
        panes.forEach(p => p.classList.toggle('is-active', p.dataset.pane === id));
      }));
    });
  }

  /* ---- Smooth anchor scroll for in-page links ---- */
  function initSmoothAnchors() {
    if (reducedMotion) return;
    $$('a[href^="#"]').forEach(a => {
      const href = a.getAttribute('href');
      if (href.length < 2) return;
      a.addEventListener('click', (e) => {
        const target = $(href);
        if (!target) return;
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
  }

  /* ---- Reveal hero immediately if intro already finished (interior pages) ---- */
  function initPageHero() {
    if (!document.getElementById('intro-overlay')) {
      document.body.classList.add('is-ready');
      initScrollReveal();
    }
  }

  /* ---- Public API ---- */
  window.SNR = window.SNR || {};
  window.SNR.initScrollReveal = initScrollReveal;
  window.SNR.animateCounter = animateCounter;

  document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initIntro();
    initPageHero();
    initTabs();
    initSmoothAnchors();
    initCounters();
    initParallax();
    initSectionBg();
  });
})();
