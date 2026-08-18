/* =====================================================================
   SNR NEST — forms.js
   Premium forms: floating labels, validation, success state
   ===================================================================== */
(function () {
  'use strict';

  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRe = /^[+\d\s()-]{7,}$/;

  function validateField(field) {
    const input = $('input, textarea, select', field);
    if (!input) return true;
    const val = (input.value || '').trim();
    const type = input.dataset.validate || input.type;
    let ok = true;

    if (input.hasAttribute('required') && !val) ok = false;
    else if (val && type === 'email' && !emailRe.test(val)) ok = false;
    else if (val && type === 'tel' && !phoneRe.test(val)) ok = false;

    field.classList.toggle('has-error', !ok);
    return ok;
  }

  function bindForm(form) {
    const fields = $$('.field', form);
    fields.forEach(f => {
      const input = $('input, textarea, select', f);
      if (input) input.addEventListener('blur', () => validateField(f));
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;
      fields.forEach(f => { if (!validateField(f)) valid = false; });
      if (!valid) return;

      const success = $('.form-success', form);
      const btn = $('button[type="submit"]', form);
      if (btn) {
        const original = btn.textContent;
        btn.disabled = true;
        btn.textContent = 'Sending';
      }
      // Simulate async submit
      setTimeout(() => {
        if (success) {
          success.classList.add('is-visible');
          success.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        form.reset();
        if (btn) { btn.disabled = false; btn.textContent = original; }
      }, 800);
    });
  }

  // Modal control (for job apply etc.)
  function openModal(id, payload) {
    const backdrop = $('#modal-backdrop');
    const panel = $('#modal-panel');
    if (!backdrop || !panel) return;
    // populate
    if (payload) {
      Object.keys(payload).forEach(k => {
        const slot = $(`[data-slot="${k}"]`, panel);
        if (slot) slot.textContent = payload[k];
      });
    }
    backdrop.classList.add('is-open');
    panel.classList.add('is-open');
    document.body.classList.add('no-scroll');
  }
  function closeModal() {
    const backdrop = $('#modal-backdrop');
    const panel = $('#modal-panel');
    if (backdrop) backdrop.classList.remove('is-open');
    if (panel) panel.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  }
  window.SNR = window.SNR || {};
  window.SNR.openModal = openModal;
  window.SNR.closeModal = closeModal;

  document.addEventListener('DOMContentLoaded', () => {
    $$('form[data-premium]').forEach(bindForm);

    // Wire close handlers
    const backdrop = $('#modal-backdrop');
    if (backdrop) backdrop.addEventListener('click', closeModal);
    $$('[data-close-modal]').forEach(b => b.addEventListener('click', closeModal));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });
  });
})();
