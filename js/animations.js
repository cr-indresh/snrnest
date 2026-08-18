/* =====================================================================
   SNR NEST — animations.js
   Hero word reveal, verticals hover-follow image, marquees
   ===================================================================== */
(function () {
  'use strict';

  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Hero word-by-word reveal: split each .split-word into spans ---- */
  function initHeroSplit() {
    $$('.split-words').forEach(el => {
      const html = el.innerHTML;
      // Split by spaces, keep tags intact using a temp approach
      // We use a simpler approach: walk text nodes
      const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
      const nodes = [];
      let n;
      while ((n = walker.nextNode())) nodes.push(n);
      nodes.forEach(node => {
        const parts = node.nodeValue.split(/(\s+)/);
        const frag = document.createDocumentFragment();
        parts.forEach(part => {
          if (part === '') return;
          if (/^\s+$/.test(part)) {
            frag.appendChild(document.createTextNode(' '));
          } else {
            const w = document.createElement('span');
            w.className = 'word-wrap';
            w.innerHTML = `<span class="word-inner">${part}</span>`;
            frag.appendChild(w);
          }
        });
        node.parentNode.replaceChild(frag, node);
      });
    });
  }

  /* ---- Verticals: hover-follow preview image ---- */
  function initVerticalsPreview() {
    if (isTouch) return;
    const rows = $$('.vertical-row');
    const preview = $('#v-preview');
    if (!rows.length || !preview) return;

    const img = $('img', preview);
    let curX = 0, curY = 0, tgtX = 0, tgtY = 0, raf = null;

    const tick = () => {
      curX += (tgtX - curX) * 0.12;
      curY += (tgtY - curY) * 0.12;
      preview.style.left = curX + 'px';
      preview.style.top = curY + 'px';
      if (Math.abs(tgtX - curX) > 0.5 || Math.abs(tgtY - curY) > 0.5) {
        raf = requestAnimationFrame(tick);
      } else { raf = null; }
    };

    rows.forEach(row => {
      row.addEventListener('mouseenter', () => {
        const src = row.dataset.image;
        if (src && img) img.src = src;
        preview.classList.add('is-visible');
        if (!raf) raf = requestAnimationFrame(tick);
      });
      row.addEventListener('mouseleave', () => {
        preview.classList.remove('is-visible');
      });
    });

    window.addEventListener('mousemove', (e) => {
      tgtX = e.clientX;
      tgtY = e.clientY;
      if (!raf) raf = requestAnimationFrame(tick);
    });
  }

  /* ---- Marquee duplication for seamless loop ---- */
  function initMarquees() {
    $$('.marquee').forEach(m => {
      const track = $('.marquee-track', m);
      if (!track) return;
      const clone = track.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      m.appendChild(clone);
    });
  }

  /* ---- Reveal triggers for [data-reveal] ---- */
  function initRevealTriggers() {
    const els = $$('[data-reveal]');
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
    }, { threshold: 0.18, rootMargin: '0px 0px -10% 0px' });
    els.forEach(el => io.observe(el));
  }

  /* ---- Sticky storytelling: progress-driven typographic shifts ---- */
  function initStickyStory() {
    if (isTouch || reducedMotion) return;
    const sticky = $('[data-sticky-story]');
    if (!sticky) return;
    const stages = $$('[data-stage]', sticky);
    if (!stages.length) return;

    const update = () => {
      const rect = sticky.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height - vh;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const progress = total > 0 ? scrolled / total : 0;
      const idx = Math.min(stages.length - 1, Math.floor(progress * stages.length));
      stages.forEach((s, i) => s.classList.toggle('is-active', i === idx));
    };
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) { requestAnimationFrame(() => { update(); ticking = false; }); ticking = true; }
    }, { passive: true });
    update();
  }

  /* ---- Headline mask animation in viewport ---- */
  function initMaskReveal() {
    if (reducedMotion) return;
    const els = $$('[data-mask]');
    if (!('IntersectionObserver' in window)) {
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
    }, { threshold: 0.2 });
    els.forEach(el => io.observe(el));
  }

  document.addEventListener('DOMContentLoaded', () => {
    initHeroSplit();
    initMarquees();
    initRevealTriggers();
    initMaskReveal();
    initVerticalsPreview();
    initStickyStory();
  });
})();
