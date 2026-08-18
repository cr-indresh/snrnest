/* =====================================================================
   SNR NEST — navigation.js
   Mega-menu, page transitions, link hijack
   ===================================================================== */
(function () {
  'use strict';

  const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function initPageTransitions() {
    if (reducedMotion) return;
    // Inject transition overlay once
    const overlay = document.createElement('div');
    overlay.className = 'page-transition';
    overlay.id = 'page-transition';
    document.body.appendChild(overlay);

    const transitionTo = (href) => {
      // Allow same-page hash links
      if (href.startsWith('#')) return;
      overlay.classList.add('is-out');
      setTimeout(() => {
        window.location.href = href;
      }, 520);
    };

    document.addEventListener('click', (e) => {
      const a = e.target.closest('a');
      if (!a) return;
      const href = a.getAttribute('href') || '';
      // only intercept internal .html links
      if (!/\.html(\?|$)/.test(href) && href !== '/') return;
      if (a.target === '_blank' || a.hasAttribute('download')) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      // same URL — ignore
      if (href === location.pathname.split('/').pop()) return;
      e.preventDefault();
      transitionTo(href);
    });

    // On new page load, animate in
    window.addEventListener('pageshow', () => {
      requestAnimationFrame(() => {
        overlay.classList.remove('is-out');
        overlay.classList.add('is-in');
        setTimeout(() => {
          overlay.classList.remove('is-in');
        }, 700);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', initPageTransitions);
})();
