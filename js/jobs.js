/**
 * SNR NEST — BPO Jobs Module
 * Handles dynamic job rendering, real-time filtering, search, and application triggers.
 */

document.addEventListener('DOMContentLoaded', () => {
  initJobsModule();
});

function initJobsModule() {
  const jobsContainer = document.getElementById('bpo-jobs-grid');
  const searchInput = document.getElementById('job-search-input');
  const processFilter = document.getElementById('filter-process-type');
  const locationFilter = document.getElementById('filter-location');
  const experienceFilter = document.getElementById('filter-experience');
  const jobsCountBadge = document.getElementById('jobs-count-badge');
  const resetFiltersBtn = document.getElementById('reset-job-filters');

  if (!jobsContainer || !window.SNR_DATA || !window.SNR_DATA.bpo) return;

  const allJobs = window.SNR_DATA.bpo.jobs;

  function renderJobs(jobs) {
    if (jobsCountBadge) jobsCountBadge.textContent = `${jobs.length} Active Positions Available`;

    if (jobs.length === 0) {
      jobsContainer.innerHTML = `
        <div class="col-span-full text-center py-16 px-4 rounded-2xl bg-slate-900/40 border border-white/5">
          <div class="w-16 h-16 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <h4 class="text-lg font-bold text-white mb-2">No Matching Roles Found</h4>
          <p class="text-sm text-slate-400 max-w-md mx-auto mb-6">Try adjusting your search criteria or clear filters to view all open opportunities.</p>
          <button id="empty-state-reset" class="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all">View All BPO Jobs</button>
        </div>
      `;
      const emptyReset = document.getElementById('empty-state-reset');
      if (emptyReset) emptyReset.addEventListener('click', resetFilters);
      return;
    }

    let html = '';
    jobs.forEach(job => {
      const skillsHtml = job.skills.map(s => `<span class="tag-pill text-xs text-slate-300">${s}</span>`).join('');
      const urgentBadge = job.urgent ? `<span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-500/15 text-rose-400 border border-rose-500/30 animate-pulse-subtle">Urgent Hiring</span>` : '';

      html += `
        <div class="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative group hover:border-blue-500/40">
          <div>
            <div class="flex items-start justify-between gap-3 mb-4">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-indigo-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold font-heading text-sm text-center px-1">
                  ${job.clientLogo}
                </div>
                <div>
                  <h3 class="text-lg font-bold text-white group-hover:text-blue-400 transition-colors font-heading leading-tight">${job.title}</h3>
                  <div class="flex items-center gap-2 mt-1">
                    <span class="text-xs font-medium text-slate-300">${job.company}</span>
                    <span class="text-xs text-slate-600">•</span>
                    <span class="text-xs text-blue-400 font-semibold">${job.processType}</span>
                  </div>
                </div>
              </div>
              ${urgentBadge}
            </div>

            <p class="text-sm text-slate-400 leading-relaxed mb-5">${job.description}</p>

            <div class="grid grid-cols-2 gap-3 py-3 px-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300 mb-5">
              <div class="flex items-center gap-2">
                <span class="text-slate-500">📍</span>
                <span class="font-medium truncate">${job.location}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-slate-500">💼</span>
                <span class="font-medium">${job.experience}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-slate-500">💰</span>
                <span class="font-semibold text-emerald-400">${job.salary}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-slate-500">⏰</span>
                <span class="font-medium">${job.mode}</span>
              </div>
            </div>

            <div class="flex flex-wrap gap-1.5 mb-6">
              ${skillsHtml}
            </div>
          </div>

          <div class="flex items-center justify-between pt-4 border-t border-white/10 gap-3">
            <span class="text-xs text-slate-400 font-medium">🔥 ${job.openings} Openings</span>
            <button onclick="window.applyJob('${job.id}')" class="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 transition-all flex items-center gap-2 group-btn">
              <span>Apply Now</span>
              <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
          </div>
        </div>
      `;
    });

    jobsContainer.innerHTML = html;
  }

  function filterJobs() {
    const q = (searchInput?.value || '').toLowerCase().trim();
    const process = processFilter?.value || 'all';
    const loc = locationFilter?.value || 'all';
    const exp = experienceFilter?.value || 'all';

    const filtered = allJobs.filter(job => {
      const matchQ = !q || job.title.toLowerCase().includes(q) || job.company.toLowerCase().includes(q) || job.skills.some(s => s.toLowerCase().includes(q)) || job.description.toLowerCase().includes(q);
      const matchProcess = process === 'all' || job.processType.toLowerCase() === process.toLowerCase();
      const matchLoc = loc === 'all' || job.location.toLowerCase().includes(loc.toLowerCase());
      const matchExp = exp === 'all' || (exp === 'fresher' && (job.experience.toLowerCase().includes('fresh') || job.experience.startsWith('0'))) || (exp === 'experienced' && !job.experience.toLowerCase().includes('fresher'));

      return matchQ && matchProcess && matchLoc && matchExp;
    });

    renderJobs(filtered);
  }

  function resetFilters() {
    if (searchInput) searchInput.value = '';
    if (processFilter) processFilter.value = 'all';
    if (locationFilter) locationFilter.value = 'all';
    if (experienceFilter) experienceFilter.value = 'all';
    renderJobs(allJobs);
  }

  // Event Listeners
  if (searchInput) searchInput.addEventListener('input', filterJobs);
  if (processFilter) processFilter.addEventListener('change', filterJobs);
  if (locationFilter) locationFilter.addEventListener('change', filterJobs);
  if (experienceFilter) experienceFilter.addEventListener('change', filterJobs);
  if (resetFiltersBtn) resetFiltersBtn.addEventListener('click', resetFilters);

  // Initial Render
  renderJobs(allJobs);

  // Global helper for opening job modal
  window.applyJob = (jobId) => {
    const job = allJobs.find(j => j.id === jobId);
    if (job && window.openAppModal) {
      window.openAppModal('bpo-job', job);
    }
  };
}
