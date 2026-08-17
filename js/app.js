/**
 * SNR NEST — Core Application JavaScript
 * Handles Navigation, Mega Menu, Mobile Drawer, Modals, Dynamic Tickers,
 * Number Counters, Tab Switchers, and Toast Notifications.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initClientMarquee();
  initCounters();
  initProcessTabs();
  initModals();
  initLucideIcons();
  initScrollEffects();
});

/* ==========================================================================
   1. Navbar & Mega Menu & Mobile Drawer
   ========================================================================== */
function initNavbar() {
  const navbar = document.getElementById('main-navbar');
  const servicesDropdownToggle = document.getElementById('services-dropdown-toggle');
  const servicesMegaMenu = document.getElementById('services-mega-menu');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const closeDrawerBtn = document.getElementById('close-drawer-btn');
  const mobileServicesToggle = document.getElementById('mobile-services-toggle');
  const mobileServicesList = document.getElementById('mobile-services-list');

  // Sticky Navbar Blur
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        navbar.classList.add('bg-slate-950/85', 'backdrop-blur-xl', 'border-b', 'border-white/10', 'shadow-2xl');
        navbar.classList.remove('bg-transparent');
      } else {
        navbar.classList.remove('bg-slate-950/85', 'backdrop-blur-xl', 'border-b', 'border-white/10', 'shadow-2xl');
        navbar.classList.add('bg-transparent');
      }
    });
  }

  // Desktop Services Mega Menu Hover / Click
  if (servicesDropdownToggle && servicesMegaMenu) {
    let timeoutId;

    const showMenu = () => {
      clearTimeout(timeoutId);
      servicesMegaMenu.classList.remove('hidden');
      setTimeout(() => {
        servicesMegaMenu.classList.remove('opacity-0', 'translate-y-2', 'pointer-events-none');
        servicesMegaMenu.classList.add('opacity-100', 'translate-y-0');
      }, 10);
    };

    const hideMenu = () => {
      timeoutId = setTimeout(() => {
        servicesMegaMenu.classList.remove('opacity-100', 'translate-y-0');
        servicesMegaMenu.classList.add('opacity-0', 'translate-y-2', 'pointer-events-none');
        setTimeout(() => {
          servicesMegaMenu.classList.add('hidden');
        }, 200);
      }, 150);
    };

    servicesDropdownToggle.addEventListener('mouseenter', showMenu);
    servicesDropdownToggle.addEventListener('mouseleave', hideMenu);
    servicesMegaMenu.addEventListener('mouseenter', showMenu);
    servicesMegaMenu.addEventListener('mouseleave', hideMenu);

    servicesDropdownToggle.addEventListener('click', (e) => {
      e.preventDefault();
      if (servicesMegaMenu.classList.contains('hidden')) {
        showMenu();
      } else {
        hideMenu();
      }
    });
  }

  // Mobile Drawer Toggle
  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileDrawer.classList.remove('hidden');
      setTimeout(() => {
        mobileDrawer.classList.remove('opacity-0');
        const drawerPanel = mobileDrawer.querySelector('.drawer-panel');
        if (drawerPanel) drawerPanel.classList.remove('translate-x-full');
      }, 10);
      document.body.style.overflow = 'hidden';
    });
  }

  const closeDrawer = () => {
    if (mobileDrawer) {
      const drawerPanel = mobileDrawer.querySelector('.drawer-panel');
      if (drawerPanel) drawerPanel.classList.add('translate-x-full');
      mobileDrawer.classList.add('opacity-0');
      setTimeout(() => {
        mobileDrawer.classList.add('hidden');
        document.body.style.overflow = '';
      }, 300);
    }
  };

  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
  if (mobileDrawer) {
    mobileDrawer.addEventListener('click', (e) => {
      if (e.target === mobileDrawer) closeDrawer();
    });
  }

  // Mobile Services Sub-list Accordion
  if (mobileServicesToggle && mobileServicesList) {
    mobileServicesToggle.addEventListener('click', (e) => {
      e.preventDefault();
      mobileServicesList.classList.toggle('hidden');
      const arrow = mobileServicesToggle.querySelector('.accordion-arrow');
      if (arrow) arrow.classList.toggle('rotate-180');
    });
  }
}

/* ==========================================================================
   2. Client Marquee Population
   ========================================================================== */
function initClientMarquee() {
  const marqueeTrack = document.getElementById('client-marquee-track');
  if (!marqueeTrack || !window.SNR_DATA || !window.SNR_DATA.clients) return;

  const clients = window.SNR_DATA.clients;
  // Duplicate for seamless infinite marquee loop
  const duplicated = [...clients, ...clients, ...clients];

  let html = '';
  duplicated.forEach((client) => {
    html += `
      <div class="flex items-center gap-3 px-6 py-3 mx-3 rounded-full bg-slate-900/60 border border-white/10 hover:border-blue-500/40 hover:bg-slate-800/80 transition-all duration-300 group cursor-default whitespace-nowrap">
        <div class="w-2.5 h-2.5 rounded-full bg-blue-500 group-hover:scale-125 transition-transform"></div>
        <span class="font-bold text-base tracking-wide text-slate-200 group-hover:text-white font-heading">${client.logoText}</span>
        <span class="text-xs text-slate-400 font-normal px-2 py-0.5 rounded bg-white/5 border border-white/5">${client.category}</span>
      </div>
    `;
  });

  marqueeTrack.innerHTML = html;
}

/* ==========================================================================
   3. Animated Number Counters on Viewport Scroll
   ========================================================================== */
function initCounters() {
  const counterElements = document.querySelectorAll('.stat-counter');
  if (!counterElements.length) return;

  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counterElements.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target') || '0', 10);
          const suffix = counter.getAttribute('data-suffix') || '';
          const prefix = counter.getAttribute('data-prefix') || '';
          const duration = 1800; // ms
          const stepTime = 25;
          const totalSteps = duration / stepTime;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / totalSteps;
            // Ease out quad
            const easeProgress = 1 - (1 - progress) * (1 - progress);
            const currentVal = Math.floor(easeProgress * target);

            counter.textContent = `${prefix}${currentVal}${suffix}`;

            if (currentStep >= totalSteps) {
              counter.textContent = `${prefix}${target}${suffix}`;
              clearInterval(timer);
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.2 });

  const firstCounter = counterElements[0];
  if (firstCounter) observer.observe(firstCounter.closest('section') || firstCounter);
}

/* ==========================================================================
   4. Interactive Process Tabs (Candidates, Businesses, Students, Website)
   ========================================================================== */
function initProcessTabs() {
  const tabButtons = document.querySelectorAll('.process-tab-btn');
  const tabPanels = document.querySelectorAll('.process-tab-panel');

  if (!tabButtons.length || !tabPanels.length) return;

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      // Update Button States
      tabButtons.forEach(b => {
        b.classList.remove('bg-blue-600', 'text-white', 'shadow-lg', 'shadow-blue-500/25');
        b.classList.add('bg-slate-900/60', 'text-slate-400', 'hover:text-slate-200', 'hover:bg-slate-800');
      });
      btn.classList.remove('bg-slate-900/60', 'text-slate-400', 'hover:text-slate-200', 'hover:bg-slate-800');
      btn.classList.add('bg-blue-600', 'text-white', 'shadow-lg', 'shadow-blue-500/25');

      // Update Panel States with smooth transition
      tabPanels.forEach(panel => {
        if (panel.getAttribute('data-panel') === targetTab) {
          panel.classList.remove('hidden');
          setTimeout(() => {
            panel.classList.remove('opacity-0', 'translate-y-4');
            panel.classList.add('opacity-100', 'translate-y-0');
          }, 10);
        } else {
          panel.classList.add('opacity-0', 'translate-y-4');
          panel.classList.remove('opacity-100', 'translate-y-0');
          setTimeout(() => {
            panel.classList.add('hidden');
          }, 200);
        }
      });
    });
  });
}

/* ==========================================================================
   5. Universal Modals System
   ========================================================================== */
function initModals() {
  const universalModal = document.getElementById('universal-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalTitle = document.getElementById('modal-title');
  const modalSubtitle = document.getElementById('modal-subtitle');
  const modalForm = document.getElementById('universal-form');
  const modalDynamicFields = document.getElementById('modal-dynamic-fields');
  const modalSubmitBtn = document.getElementById('modal-submit-btn');

  if (!universalModal) return;

  // Close modal helper
  window.closeAppModal = () => {
    universalModal.classList.remove('active');
    setTimeout(() => {
      universalModal.classList.add('hidden');
      document.body.style.overflow = '';
    }, 300);
  };

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', window.closeAppModal);
  universalModal.addEventListener('click', (e) => {
    if (e.target === universalModal) window.closeAppModal();
  });

  // Global Trigger helper: openModal(type, contextData)
  window.openAppModal = (type, data = {}) => {
    universalModal.classList.remove('hidden');
    setTimeout(() => {
      universalModal.classList.add('active');
    }, 10);
    document.body.style.overflow = 'hidden';

    // Configure form fields based on modal type
    let fieldsHtml = '';

    switch (type) {
      case 'bpo-job':
        modalTitle.textContent = `Apply for ${data.title || 'BPO Role'}`;
        modalSubtitle.textContent = `${data.company || 'SNR Partner'} • ${data.location || 'Bangalore'} • ${data.salary || 'Competitive'}`;
        modalSubmitBtn.textContent = 'Submit Application';
        fieldsHtml = `
          <input type="hidden" name="type" value="bpo-job">
          <input type="hidden" name="role_title" value="${data.title || ''}">
          <input type="hidden" name="company" value="${data.company || ''}">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Full Name *</label>
              <input type="text" name="fullname" required placeholder="John Doe" class="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm">
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Phone Number *</label>
              <input type="tel" name="phone" required placeholder="+91 98765 43210" class="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm">
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Email Address *</label>
              <input type="email" name="email" required placeholder="john@example.com" class="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm">
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Current Location *</label>
              <input type="text" name="location" required placeholder="e.g. Bangalore / Hyderabad" class="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm">
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Highest Qualification *</label>
              <select name="qualification" required class="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-white focus:outline-none focus:border-blue-500 text-sm">
                <option value="">Select Qualification</option>
                <option value="12th Pass / PUC">12th Pass / PUC</option>
                <option value="Diploma">Diploma</option>
                <option value="Graduate (B.A/B.Com/B.Sc/BBA)">Graduate (B.A / B.Com / B.Sc / BBA)</option>
                <option value="B.Tech / B.E">B.Tech / B.E</option>
                <option value="Post Graduate (MBA/MCA/M.Sc)">Post Graduate (MBA / MCA / M.Sc)</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Relevant Experience *</label>
              <select name="experience" required class="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-white focus:outline-none focus:border-blue-500 text-sm">
                <option value="Fresher (0 Years)">Fresher (0 Years)</option>
                <option value="6 Months - 1 Year">6 Months - 1 Year</option>
                <option value="1 - 2 Years">1 - 2 Years</option>
                <option value="2 - 4 Years">2 - 4 Years</option>
                <option value="4+ Years">4+ Years</option>
              </select>
            </div>
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Upload Resume / CV (PDF or DOC)</label>
            <div class="border-2 border-dashed border-white/15 rounded-lg p-4 text-center hover:border-blue-500/50 transition-colors bg-slate-900/40">
              <input type="file" name="resume" accept=".pdf,.doc,.docx" class="hidden" id="resume-file-input">
              <label for="resume-file-input" class="cursor-pointer flex flex-col items-center justify-center gap-1.5 text-xs text-slate-400">
                <span class="text-blue-400 font-medium text-sm">Click to choose resume file</span>
                <span>Supported: PDF, DOC, DOCX (Max 5MB)</span>
                <span id="file-chosen-name" class="text-emerald-400 font-semibold mt-1"></span>
              </label>
            </div>
          </div>
        `;
        break;

      case 'manpower-request':
        modalTitle.textContent = 'Submit Manpower Requirement';
        modalSubtitle.textContent = 'Hire vetted blue-collar, warehouse, dark store, and operations staff.';
        modalSubmitBtn.textContent = 'Submit Hiring Requirement';
        fieldsHtml = `
          <input type="hidden" name="type" value="manpower-request">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Company Name *</label>
              <input type="text" name="company" required placeholder="e.g. QuickLogistics India Pvt Ltd" class="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-sm">
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Contact Person *</label>
              <input type="text" name="contact_person" required placeholder="e.g. Rajesh Sharma (HR Head)" class="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-sm">
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Business Email *</label>
              <input type="email" name="email" required placeholder="rajesh@company.com" class="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-sm">
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Contact Phone *</label>
              <input type="tel" name="phone" required placeholder="+91 98765 43210" class="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-sm">
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Industry Type *</label>
              <select name="industry" required class="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-white focus:outline-none focus:border-emerald-500 text-sm">
                <option value="Dark Store / Q-Commerce">Dark Store / Q-Commerce</option>
                <option value="E-Commerce Fulfillment">E-Commerce Fulfillment</option>
                <option value="Logistics & 3PL">Logistics & 3PL</option>
                <option value="Retail Supermarket">Retail Supermarket</option>
                <option value="BPO & Operations">BPO & Operations</option>
                <option value="Manufacturing / Other">Manufacturing / Other</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">No. of Positions *</label>
              <select name="headcount" required class="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-white focus:outline-none focus:border-emerald-500 text-sm">
                <option value="5 - 15 Staff">5 - 15 Staff</option>
                <option value="15 - 50 Staff">15 - 50 Staff</option>
                <option value="50 - 100 Staff">50 - 100 Staff</option>
                <option value="100+ Bulk Workforce">100+ Bulk Workforce</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Location *</label>
              <input type="text" name="location" required placeholder="Bangalore, Hyderabad..." class="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-sm">
            </div>
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Role Specifics & Expected Joining Date</label>
            <textarea name="requirements" rows="2" placeholder="e.g. Need 30 Dark Store Pickers & 2 Shift Supervisors within 10 days" class="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-sm"></textarea>
          </div>
        `;
        break;

      case 'internship-apply':
        modalTitle.textContent = `Apply for ${data.title || 'Internship'}`;
        modalSubtitle.textContent = `${data.domain || 'Domain Track'} • ${data.duration || '3-6 Months'} • Live Certificate`;
        modalSubmitBtn.textContent = 'Submit Internship Application';
        fieldsHtml = `
          <input type="hidden" name="type" value="internship-apply">
          <input type="hidden" name="internship_title" value="${data.title || ''}">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Full Name *</label>
              <input type="text" name="fullname" required placeholder="Priya Sharma" class="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm">
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Email Address *</label>
              <input type="email" name="email" required placeholder="priya@student.edu" class="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm">
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Phone Number *</label>
              <input type="tel" name="phone" required placeholder="+91 98765 43210" class="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm">
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">College / University *</label>
              <input type="text" name="college" required placeholder="e.g. Bangalore University / JNTU" class="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm">
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Degree / Branch *</label>
              <input type="text" name="degree" required placeholder="BBA / B.Tech / MBA" class="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm">
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Graduation Year *</label>
              <select name="grad_year" required class="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-white focus:outline-none focus:border-amber-500 text-sm">
                <option value="2026">2026</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022 or Earlier">2022 or Earlier</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Preferred Track</label>
              <input type="text" name="preferred_track" value="${data.title || 'HR & Operations'}" class="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-white text-sm" readonly>
            </div>
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Key Skills & Why You Wish to Join</label>
            <textarea name="notes" rows="2" placeholder="Tell us about your key strengths and learning goals" class="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm"></textarea>
          </div>
        `;
        break;

      case 'course-enroll':
        modalTitle.textContent = `Enroll in ${data.name || 'Training Program'}`;
        modalSubtitle.textContent = `${data.duration || 'Structured Course'} • Practical Labs • Placement Support`;
        modalSubmitBtn.textContent = 'Confirm & Talk to Career Advisor';
        fieldsHtml = `
          <input type="hidden" name="type" value="course-enroll">
          <input type="hidden" name="course_name" value="${data.name || ''}">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Full Name *</label>
              <input type="text" name="fullname" required placeholder="Karan Verma" class="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 text-sm">
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Phone Number *</label>
              <input type="tel" name="phone" required placeholder="+91 98765 43210" class="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 text-sm">
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Email Address *</label>
              <input type="email" name="email" required placeholder="karan@example.com" class="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 text-sm">
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Preferred Learning Mode *</label>
              <select name="learning_mode" required class="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-white focus:outline-none focus:border-rose-500 text-sm">
                <option value="Live Interactive Online">Live Interactive Online</option>
                <option value="Classroom Bootcamp (Bangalore)">Classroom Bootcamp (Bangalore)</option>
                <option value="Classroom Bootcamp (Hyderabad)">Classroom Bootcamp (Hyderabad)</option>
                <option value="Weekend Professional Batch">Weekend Professional Batch</option>
              </select>
            </div>
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Current Background</label>
            <select name="background" class="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-white focus:outline-none focus:border-rose-500 text-sm">
              <option value="Final Year Student">Final Year College Student</option>
              <option value="Recent Graduate Looking for Job">Recent Graduate Looking for Job</option>
              <option value="Working Professional (Career Switch)">Working Professional (Career Switch)</option>
              <option value="Non-Tech to Tech Aspirant">Non-Tech to Tech Aspirant</option>
            </select>
          </div>
        `;
        break;

      case 'website-quote':
        modalTitle.textContent = 'Start Your Website Project';
        modalSubtitle.textContent = 'Modern, lightning-fast digital experiences engineered for growth.';
        modalSubmitBtn.textContent = 'Request Project Estimation';
        fieldsHtml = `
          <input type="hidden" name="type" value="website-quote">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Your Name *</label>
              <input type="text" name="fullname" required placeholder="Alex Morgan" class="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 text-sm">
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Business / Brand Name *</label>
              <input type="text" name="company" required placeholder="Morgan Enterprises" class="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 text-sm">
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Email Address *</label>
              <input type="email" name="email" required placeholder="alex@morgan.com" class="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 text-sm">
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Phone Number *</label>
              <input type="tel" name="phone" required placeholder="+91 98765 43210" class="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 text-sm">
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Project Scope *</label>
              <select name="scope" required class="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-white focus:outline-none focus:border-purple-500 text-sm">
                <option value="New Corporate / Business Website">New Corporate / Business Website</option>
                <option value="High-Converting Landing Page">High-Converting Landing Page</option>
                <option value="E-Commerce Platform">E-Commerce Platform</option>
                <option value="Website Redesign & Modernization">Website Redesign & Modernization</option>
                <option value="Ongoing Maintenance & SEO">Ongoing Maintenance & SEO</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Target Timeline</label>
              <select name="timeline" class="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-white focus:outline-none focus:border-purple-500 text-sm">
                <option value="Immediate (1-2 Weeks)">Immediate (1 - 2 Weeks)</option>
                <option value="Within 1 Month">Within 1 Month</option>
                <option value="Flexible / Planning Phase">Flexible / Planning Phase</option>
              </select>
            </div>
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Project Brief & Feature Wishlist</label>
            <textarea name="details" rows="2" placeholder="Briefly describe your business goals, target audience, and any reference sites you admire..." class="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 text-sm"></textarea>
          </div>
        `;
        break;

      default:
        modalTitle.textContent = 'Get in Touch with SNR NEST';
        modalSubtitle.textContent = 'Our team will connect with you within 24 business hours.';
        modalSubmitBtn.textContent = 'Send Message';
        fieldsHtml = `
          <input type="hidden" name="type" value="general-contact">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Full Name *</label>
              <input type="text" name="fullname" required placeholder="John Doe" class="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm">
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Phone Number *</label>
              <input type="tel" name="phone" required placeholder="+91 98765 43210" class="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm">
            </div>
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Email Address *</label>
            <input type="email" name="email" required placeholder="john@example.com" class="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm">
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">I am interested in</label>
            <select name="category" class="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-white focus:outline-none focus:border-blue-500 text-sm">
              <option value="BPO Hiring & Jobs">BPO Hiring & Jobs</option>
              <option value="Manpower Sourcing & Staffing">Manpower Sourcing & Staffing</option>
              <option value="Website Solutions">Website Solutions</option>
              <option value="Internship Programs">Internship Programs</option>
              <option value="Training & Placement">Training & Placement</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Message</label>
            <textarea name="message" rows="3" placeholder="How can we help you today?" class="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm"></textarea>
          </div>
        `;
    }

    modalDynamicFields.innerHTML = fieldsHtml;

    // Attach file input listener if resume input exists
    const fileInput = document.getElementById('resume-file-input');
    const fileNameDisplay = document.getElementById('file-chosen-name');
    if (fileInput && fileNameDisplay) {
      fileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files.length > 0) {
          fileNameDisplay.textContent = `Attached: ${e.target.files[0].name}`;
        }
      });
    }
  };

  // Form Submission Handler
  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(modalForm);
      const dataObj = Object.fromEntries(formData.entries());

      // Save to localStorage as a mock API record
      const existingInquiries = JSON.parse(localStorage.getItem('snr_inquiries') || '[]');
      existingInquiries.push({
        ...dataObj,
        timestamp: new Date().toISOString(),
        id: 'REQ-' + Date.now().toString(36).toUpperCase()
      });
      localStorage.setItem('snr_inquiries', JSON.stringify(existingInquiries));

      // Close modal and show toast
      window.closeAppModal();
      showToast('Thank you! Your request has been received. Our team will contact you shortly.', 'success');
      modalForm.reset();
    });
  }
}

/* ==========================================================================
   6. Toast Notifications Engine
   ========================================================================== */
function showToast(message, type = 'success') {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';

  const iconSvg = type === 'success'
    ? `<svg class="w-5 h-5 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`
    : `<svg class="w-5 h-5 text-blue-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`;

  toast.innerHTML = `
    ${iconSvg}
    <div class="flex-1 font-medium">${message}</div>
    <button class="text-slate-400 hover:text-white text-xs ml-2 p-1" onclick="this.parentElement.remove()">✕</button>
  `;

  toastContainer.appendChild(toast);

  // Trigger animation
  setTimeout(() => toast.classList.add('show'), 10);

  // Auto remove after 5 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 5000);
}
window.showToast = showToast;

/* ==========================================================================
   7. Lucide Icons Initializer
   ========================================================================== */
function initLucideIcons() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}
window.initLucideIcons = initLucideIcons;

/* ==========================================================================
   8. Scroll Effects & Reveal Animations
   ========================================================================== */
function initScrollEffects() {
  const revealElements = document.querySelectorAll('.scroll-reveal');
  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        entry.target.classList.remove('opacity-0', 'translate-y-6');
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => {
    el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-6');
    observer.observe(el);
  });
}
