/* =====================================================================
   SNR NEST — magnetic.js
   Magnetic buttons — physical, premium
   ===================================================================== */
(function () {
  'use strict';

  const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isTouch || reducedMotion) return;

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  const MAGNET_RADIUS = 90;     // px range within which magnetism kicks in
  const PULL_STRENGTH = 0.35;   // how strongly button moves toward cursor
  const TEXT_STRENGTH = 0.18;  // how strongly inner text shifts

  function bindMagnet(el) {
    const inner = el.querySelector('.m-text') || el;
    let raf = null;
    let curX = 0, curY = 0;
    let tgtX = 0, tgtY = 0;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist < MAGNET_RADIUS) {
        tgtX = dx * PULL_STRENGTH;
        tgtY = dy * PULL_STRENGTH;
        const tInner = el.querySelector('.m-text');
        if (tInner) {
          tInner.style.transform = `translate(${dx * TEXT_STRENGTH}px, ${dy * TEXT_STRENGTH}px)`;
        }
        const tArrow = el.querySelector('.arrow');
        if (tArrow) {
          tArrow.style.transform = `translate(${dx * (TEXT_STRENGTH + 0.1)}px, ${dy * (TEXT_STRENGTH + 0.1)}px)`;
        }
      } else {
        tgtX = 0; tgtY = 0;
        const tInner = el.querySelector('.m-text');
        if (tInner) tInner.style.transform = '';
        const tArrow = el.querySelector('.arrow');
        if (tArrow) tArrow.style.transform = '';
      }
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const tick = () => {
      curX += (tgtX - curX) * 0.18;
      curY += (tgtY - curY) * 0.18;
      el.style.transform = `translate3d(${curX}px, ${curY}px, 0)`;
      if (Math.abs(tgtX - curX) > 0.05 || Math.abs(tgtY - curY) > 0.05) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = null;
      }
    };

    const onLeave = () => {
      tgtX = 0; tgtY = 0;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
  }

  document.addEventListener('DOMContentLoaded', () => {
    $$('.magnetic').forEach(bindMagnet);
  });
})();
