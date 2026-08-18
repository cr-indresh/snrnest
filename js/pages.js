/* =====================================================================
   SNR NEST — pages.js
   Page-level rendering: jobs, internships, courses, advantages, verticals
   ===================================================================== */
(function () {
  'use strict';

  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  /* ---------- Reusable chip ---------- */
  function chip(label, dataKey, value) {
    return `<button class="chip" data-${dataKey}="${value}">${label}</button>`;
  }

  /* ---------- BPO JOBS list ---------- */
  function renderJobs() {
    const wrap = $('#job-list');
    if (!wrap || !window.SNR_DATA || !window.SNR_DATA.bpo) return;
    const allJobs = window.SNR_DATA.bpo.jobs;

    function paint(list) {
      const count = $('#job-count');
      if (count) count.textContent = list.length;
      if (!list.length) {
        wrap.innerHTML = `<div class="py-12 text-center text-muted font-mono text-xs tracking-widest uppercase">No matching opportunities — adjust filters.</div>`;
        return;
      }
      wrap.innerHTML = list.map((j, i) => `
        <article class="job-row" data-job="${j.id}" tabindex="0" role="button" aria-label="View ${j.title} at ${j.company}">
          <div class="j-num">${String(i + 1).padStart(2, '0')}</div>
          <div>
            <div class="j-title">${j.urgent ? '<span class="urgent-dot"></span>' : ''}${j.title}</div>
            <div class="j-company mt-1">${j.company}</div>
          </div>
          <div class="j-meta">${j.location}</div>
          <div class="j-meta">${j.experience}</div>
          <div class="j-salary">${j.salary}</div>
          <div class="j-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </div>
        </article>
      `).join('');
      // wire click
      $$('.job-row', wrap).forEach((row, idx) => {
        const job = list[idx];
        row.addEventListener('click', () => openJobPanel(job));
        row.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openJobPanel(job); }
        });
      });
    }

    function openJobPanel(job) {
      window.SNR.openModal && window.SNR.openModal('job', {
        'job-title': job.title,
        'job-company': job.company,
        'job-location': job.location,
        'job-salary': job.salary,
        'job-experience': job.experience,
        'job-mode': job.mode,
        'job-type': job.processType,
        'job-openings': job.openings + ' Openings',
        'job-desc': job.description,
        'job-skills': job.skills.join('  /  ')
      });
      const applyBtn = $('#modal-apply-btn');
      if (applyBtn) applyBtn.onclick = () => {
        window.SNR.closeModal();
        const form = $('#candidate-form');
        if (form) form.scrollIntoView({ behavior: 'smooth' });
      };
    }

    function gatherFilters() {
      const q = ($('#filter-search')?.value || '').toLowerCase().trim();
      const role = $('#filter-role')?.value || 'all';
      const loc  = $('#filter-location')?.value || 'all';
      const exp  = $('#filter-experience')?.value || 'all';
      const mode = $('#filter-mode')?.value || 'all';
      const proc = $('#filter-process')?.value || 'all';
      const sal  = $('#filter-salary')?.value || 'all';
      return allJobs.filter(j => {
        const matchQ = !q || j.title.toLowerCase().includes(q) || j.company.toLowerCase().includes(q) || (j.skills || []).some(s => s.toLowerCase().includes(q));
        const matchRole = role === 'all' || (j.processType || '').toLowerCase().includes(role);
        const matchLoc = loc === 'all' || (j.location || '').toLowerCase().includes(loc);
        const matchExp = exp === 'all' || (j.experience || '').toLowerCase().includes(exp);
        const matchMode = mode === 'all' || (j.mode || '').toLowerCase().includes(mode);
        const matchProc = proc === 'all' || (j.processType || '').toLowerCase().includes(proc);
        const matchSal = sal === 'all' || (j.salary || '').toLowerCase().includes(sal);
        return matchQ && matchRole && matchLoc && matchExp && matchMode && matchProc && matchSal;
      });
    }

    function bindFilter(id) {
      const el = $(id);
      if (el) el.addEventListener('input', () => paint(gatherFilters()));
      if (el) el.addEventListener('change', () => paint(gatherFilters()));
    }
    ['#filter-search', '#filter-role', '#filter-location', '#filter-experience', '#filter-mode', '#filter-process', '#filter-salary'].forEach(bindFilter);

    const reset = $('#filter-reset');
    if (reset) reset.addEventListener('click', () => {
      ['#filter-search', '#filter-role', '#filter-location', '#filter-experience', '#filter-mode', '#filter-process', '#filter-salary'].forEach(s => { if ($(s)) $(s).value = ''; });
      paint(allJobs);
    });

    paint(allJobs);
  }

  /* ---------- Internship tracks ---------- */
  function renderInternships() {
    const wrap = $('#internship-list');
    if (!wrap || !window.SNR_DATA || !window.SNR_DATA.internship) return;
    const tracks = window.SNR_DATA.internship.tracks;
    function paint(list) {
      const count = $('#int-count');
      if (count) count.textContent = list.length;
      wrap.innerHTML = list.map((t, i) => `
        <article class="job-row" data-int="${t.id}" tabindex="0" role="button">
          <div class="j-num">${String(i + 1).padStart(2, '0')}</div>
          <div>
            <div class="j-title">${t.featured ? '<span class="urgent-dot"></span>' : ''}${t.title}</div>
            <div class="j-company mt-1">${t.domain}</div>
          </div>
          <div class="j-meta">${t.duration}</div>
          <div class="j-meta">${t.mode}</div>
          <div class="j-salary">${t.eligibility.split('(')[0].trim()}</div>
          <div class="j-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </div>
        </article>
      `).join('');
      $$('.job-row', wrap).forEach((row, idx) => {
        const track = list[idx];
        row.addEventListener('click', () => openIntPanel(track));
        row.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openIntPanel(track); }
        });
      });
    }
    function openIntPanel(t) {
      window.SNR.openModal && window.SNR.openModal('internship', {
        'job-title': t.title,
        'job-company': t.domain,
        'job-location': t.mode,
        'job-salary': t.certificate,
        'job-experience': t.eligibility,
        'job-mode': t.duration,
        'job-type': 'Internship',
        'job-openings': 'Open Intake',
        'job-desc': t.projects,
        'job-skills': t.skills.join('  /  ')
      });
    }
    function gather() {
      const q = ($('#int-search')?.value || '').toLowerCase().trim();
      const dom = $('#int-domain')?.value || 'all';
      return tracks.filter(t => {
        const matchQ = !q || t.title.toLowerCase().includes(q) || t.domain.toLowerCase().includes(q);
        const matchDom = dom === 'all' || (t.domain || '').toLowerCase().includes(dom);
        return matchQ && matchDom;
      });
    }
    ['#int-search', '#int-domain'].forEach(id => {
      const el = $(id);
      if (el) el.addEventListener('input', () => paint(gather()));
      if (el) el.addEventListener('change', () => paint(gather()));
    });
    paint(tracks);
  }

  /* ---------- Training courses ---------- */
  function renderCourses() {
    const wrap = $('#course-list');
    if (!wrap || !window.SNR_DATA || !window.SNR_DATA.training) return;
    const courses = window.SNR_DATA.training.courses;
    function paint(list) {
      const count = $('#course-count');
      if (count) count.textContent = list.length;
      wrap.innerHTML = list.map((c, i) => `
        <article class="job-row" data-course="${c.id}" tabindex="0" role="button">
          <div class="j-num">${String(i + 1).padStart(2, '0')}</div>
          <div>
            <div class="j-title">${c.featured ? '<span class="urgent-dot"></span>' : ''}${c.name}</div>
            <div class="j-company mt-1">${c.category}</div>
          </div>
          <div class="j-meta">${c.duration}</div>
          <div class="j-meta">${c.mode}</div>
          <div class="j-salary">${c.level}</div>
          <div class="j-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </div>
        </article>
      `).join('');
      $$('.job-row', wrap).forEach((row, idx) => {
        const c = list[idx];
        row.addEventListener('click', () => openCoursePanel(c));
        row.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openCoursePanel(c); }
        });
      });
    }
    function openCoursePanel(c) {
      window.SNR.openModal && window.SNR.openModal('course', {
        'job-title': c.name,
        'job-company': c.category,
        'job-location': c.mode,
        'job-salary': c.certification,
        'job-experience': c.placementSupport,
        'job-mode': c.duration,
        'job-type': c.level,
        'job-openings': 'Live Cohort',
        'job-desc': c.projects,
        'job-skills': c.skills.join('  /  ')
      });
    }
    function gather() {
      const q = ($('#course-search')?.value || '').toLowerCase().trim();
      const cat = $('#course-cat')?.value || 'all';
      return courses.filter(c => {
        const matchQ = !q || c.name.toLowerCase().includes(q) || c.category.toLowerCase().includes(q);
        const matchCat = cat === 'all' || (c.category || '').toLowerCase().includes(cat);
        return matchQ && matchCat;
      });
    }
    ['#course-search', '#course-cat'].forEach(id => {
      const el = $(id);
      if (el) el.addEventListener('input', () => paint(gather()));
      if (el) el.addEventListener('change', () => paint(gather()));
    });
    paint(courses);
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderJobs();
    renderInternships();
    renderCourses();
  });

  window.SNR = window.SNR || {};
  window.SNR.renderJobs = renderJobs;
  window.SNR.renderInternships = renderInternships;
  window.SNR.renderCourses = renderCourses;
})();
