/* =====================================================================
   SNR NEST — partials.js
   Injects shared navigation, footer, intro overlay, modal, v-preview
   into all pages. Keeps markup DRY across 9 HTML pages.
   ===================================================================== */
(function () {
  'use strict';

  const NAV_HTML = `
  <header id="nav" class="nav">
    <div class="shell nav-inner">
      <a href="index.html" class="nav-logo" aria-label="SNR NEST home">
        <span class="glyph">SN</span>
        <span>SNR NEST</span>
      </a>
      <nav class="nav-links desktop-only" aria-label="Primary">
        <a href="about.html" class="nav-link">About</a>
        <a href="bpo-hiring.html" class="nav-link">BPO Hiring</a>
        <a href="manpower-sourcing.html" class="nav-link">Manpower</a>
        <a href="website-solutions.html" class="nav-link">Website</a>
        <a href="internship.html" class="nav-link">Internship</a>
        <a href="training-placement.html" class="nav-link">Training</a>
        <a href="careers.html" class="nav-link">Careers</a>
        <a href="contact.html" class="nav-link">Contact</a>
      </nav>
      <a href="contact.html" class="nav-cta desktop-only magnetic magnetic-ghost">
        <span class="m-text">Get in touch</span>
      </a>
      <button id="nav-burger" class="nav-burger mobile-only" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <div id="mobile-menu" class="mobile-menu" aria-hidden="true">
    <a href="about.html"><span>About</span><span class="num">01</span></a>
    <a href="bpo-hiring.html"><span>BPO Hiring</span><span class="num">02</span></a>
    <a href="manpower-sourcing.html"><span>Manpower</span><span class="num">03</span></a>
    <a href="website-solutions.html"><span>Website</span><span class="num">04</span></a>
    <a href="internship.html"><span>Internship</span><span class="num">05</span></a>
    <a href="training-placement.html"><span>Training</span><span class="num">06</span></a>
    <a href="careers.html"><span>Careers</span><span class="num">07</span></a>
    <a href="contact.html"><span>Contact</span><span class="num">08</span></a>
  </div>

  <div id="v-preview" class="v-preview" aria-hidden="true">
    <img alt="" />
  </div>

  <div id="modal-backdrop" class="modal-backdrop" aria-hidden="true"></div>
  <div id="modal-panel" class="modal-panel" role="dialog" aria-modal="true" aria-hidden="true">
    <button class="modal-close" data-close-modal aria-label="Close">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 6l12 12M18 6l-12 12"/></svg>
    </button>
    <div class="text-eyebrow sr" data-slot="job-type">Opportunity</div>
    <h2 class="t-large mt-4 mb-2 sr" style="transition-delay:.05s" data-slot="job-title">Title</h2>
    <div class="font-mono text-bone text-xs tracking-widest mb-6 sr" style="transition-delay:.1s" data-slot="job-company">Company</div>
    <div class="grid grid-cols-2 gap-x-6 gap-y-5 mb-6 sr" style="transition-delay:.15s">
      <div>
        <div class="t-label text-faint">Location</div>
        <div class="mt-2 text-bone text-sm" data-slot="job-location"></div>
      </div>
      <div>
        <div class="t-label text-faint">Experience</div>
        <div class="mt-2 text-bone text-sm" data-slot="job-experience"></div>
      </div>
      <div>
        <div class="t-label text-faint">Mode</div>
        <div class="mt-2 text-bone text-sm" data-slot="job-mode"></div>
      </div>
      <div>
        <div class="t-label text-faint">Compensation</div>
        <div class="mt-2 text-accent text-sm font-mono" data-slot="job-salary"></div>
      </div>
    </div>
    <div class="t-label text-faint mb-2">Overview</div>
    <p class="text-cream text-sm leading-relaxed mb-6" data-slot="job-desc"></p>
    <div class="t-label text-faint mb-3">Skills / Stack</div>
    <p class="text-bone text-sm font-mono leading-relaxed mb-7" data-slot="job-skills"></p>
    <div class="hairline mb-6"></div>
    <button id="modal-apply-btn" class="magnetic magnetic-solid">
      <span class="m-text">Apply now</span>
      <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
    </button>
  </div>
  `;

  const FOOTER_HTML = `
  <footer class="bg-ink relative" style="padding-top:clamp(6rem,12vh,10rem);">
    <div class="shell">
      <div class="sr" data-reveal>
        <div class="t-eyebrow mb-6">SNR NEST  —  Ecosystem</div>
        <div class="footer-wordmark">SNR NEST</div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-8 pt-20 pb-12 sr" style="transition-delay:.2s" data-reveal>
        <div>
          <div class="t-label text-faint mb-5">Company</div>
          <a href="about.html" class="footer-link block">About</a>
          <a href="careers.html" class="footer-link block">Careers</a>
          <a href="contact.html" class="footer-link block">Contact</a>
        </div>
        <div>
          <div class="t-label text-faint mb-5">Services</div>
          <a href="bpo-hiring.html" class="footer-link block">BPO Hiring</a>
          <a href="manpower-sourcing.html" class="footer-link block">Manpower</a>
          <a href="website-solutions.html" class="footer-link block">Website Solutions</a>
          <a href="training-placement.html" class="footer-link block">Training</a>
        </div>
        <div>
          <div class="t-label text-faint mb-5">Candidates</div>
          <a href="bpo-hiring.html" class="footer-link block">BPO Jobs</a>
          <a href="internship.html" class="footer-link block">Internships</a>
          <a href="training-placement.html" class="footer-link block">Training</a>
        </div>
        <div>
          <div class="t-label text-faint mb-5">Businesses</div>
          <a href="manpower-sourcing.html" class="footer-link block">Request Manpower</a>
          <a href="bpo-hiring.html" class="footer-link block">BPO Hiring</a>
          <a href="website-solutions.html" class="footer-link block">Website Solutions</a>
        </div>
        <div>
          <div class="t-label text-faint mb-5">Locations</div>
          <span class="footer-link block">Bangalore</span>
          <span class="footer-link block">Hyderabad</span>
          <span class="footer-link block text-faint">More coming soon</span>
        </div>
        <div>
          <div class="t-label text-faint mb-5">Connect</div>
          <a href="mailto:praveen@snrnest.in" class="footer-link block">praveen@snrnest.in</a>
          <a href="mailto:rangapraveend4@gmail.com" class="footer-link block">rangapraveend4@gmail.com</a>
          <a href="tel:+918041238899" class="footer-link block">+91 80 4123 8899</a>
          <span class="footer-link block text-faint">Mon – Sat, 10:00 – 19:00</span>
        </div>
      </div>

      <div class="hairline"></div>
      <div class="flex flex-col md:flex-row justify-between gap-4 py-8">
        <div class="font-mono text-xs tracking-widest text-faint">© ${new Date().getFullYear()} SNR NEST  —  ALL RIGHTS RESERVED</div>
        <div class="font-mono text-xs tracking-widest text-faint">BUILDING CAREERS  •  EMPOWERING BUSINESSES  •  CREATING OPPORTUNITIES</div>
      </div>
    </div>
  </footer>
  `;

  const INTRO_HTML = `
  <div id="intro-overlay" class="intro-overlay">
    <div class="intro-wordmark">SNR NEST</div>
    <div class="intro-rule"></div>
    <div class="intro-meta">Talent  •  Technology  •  Careers</div>
  </div>
  <div id="loading-bar" class="loading-bar"></div>
  `;

  function mount() {
    // Inject intro + nav at body start
    const navMount = document.getElementById('nav-mount');
    if (navMount) navMount.innerHTML = NAV_HTML;
    else document.body.insertAdjacentHTML('afterbegin', NAV_HTML);

    const footerMount = document.getElementById('footer-mount');
    if (footerMount) footerMount.innerHTML = FOOTER_HTML;
    else document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

    // Intro overlay at very top
    document.body.insertAdjacentHTML('afterbegin', INTRO_HTML);

    // Set active nav link
    const here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    document.querySelectorAll('.nav-link').forEach(l => {
      const href = (l.getAttribute('href') || '').toLowerCase();
      if (href === here) l.classList.add('is-active');
    });

    // Re-fire nav init / magnetic init after partials are in
    document.dispatchEvent(new CustomEvent('partials:ready'));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
