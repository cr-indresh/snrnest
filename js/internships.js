/**
 * SNR NEST — Internships Module
 * Handles dynamic internship track rendering, domain filtering, and application modal triggers.
 */

document.addEventListener('DOMContentLoaded', () => {
  initInternshipsModule();
});

function initInternshipsModule() {
  const internshipsContainer = document.getElementById('internships-grid');
  const domainFilter = document.getElementById('filter-internship-domain');
  const durationFilter = document.getElementById('filter-internship-duration');
  const searchInput = document.getElementById('internship-search-input');
  const countBadge = document.getElementById('internship-count-badge');

  if (!internshipsContainer || !window.SNR_DATA || !window.SNR_DATA.internship) return;

  const allTracks = window.SNR_DATA.internship.tracks;

  function renderTracks(tracks) {
    if (countBadge) countBadge.textContent = `${tracks.length} Programs Open for Enrolment`;

    if (tracks.length === 0) {
      internshipsContainer.innerHTML = `
        <div class="col-span-full text-center py-16 px-4 rounded-2xl bg-slate-900/40 border border-white/5">
          <h4 class="text-lg font-bold text-white mb-2">No Matching Internship Tracks</h4>
          <p class="text-sm text-slate-400 max-w-md mx-auto mb-6">Try selecting a different domain category or clear your search query.</p>
          <button onclick="document.getElementById('filter-internship-domain').value='all'; document.getElementById('internship-search-input').value=''; window.filterInternships();" class="px-5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all">View All Tracks</button>
        </div>
      `;
      return;
    }

    let html = '';
    tracks.forEach(track => {
      const skillsHtml = track.skills.map(s => `<span class="tag-pill text-xs text-amber-200/80 bg-amber-500/10 border-amber-500/20">${s}</span>`).join('');
      const featuredBadge = track.featured ? `<span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">Popular Track</span>` : '';

      html += `
        <div class="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative group hover:border-amber-500/40">
          <div>
            <div class="flex items-start justify-between gap-3 mb-3">
              <span class="text-xs font-semibold tracking-wider text-amber-400 uppercase bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">${track.domain}</span>
              ${featuredBadge}
            </div>

            <h3 class="text-xl font-bold text-white group-hover:text-amber-400 transition-colors font-heading mb-3">${track.title}</h3>

            <div class="grid grid-cols-2 gap-2.5 py-3 px-3.5 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300 mb-4">
              <div>
                <span class="text-slate-500 block text-[10px] uppercase font-semibold">Duration</span>
                <span class="font-medium text-slate-200">${track.duration}</span>
              </div>
              <div>
                <span class="text-slate-500 block text-[10px] uppercase font-semibold">Learning Mode</span>
                <span class="font-medium text-slate-200">${track.mode}</span>
              </div>
              <div class="col-span-2 pt-1 border-t border-white/5">
                <span class="text-slate-500 block text-[10px] uppercase font-semibold">Eligibility</span>
                <span class="font-medium text-slate-200">${track.eligibility}</span>
              </div>
            </div>

            <div class="mb-4">
              <span class="text-xs font-semibold text-slate-300 block mb-1.5">🚀 Live Project Exposure:</span>
              <p class="text-xs text-slate-400 leading-relaxed bg-slate-900/60 p-3 rounded-lg border border-white/5">${track.projects}</p>
            </div>

            <div class="mb-5">
              <span class="text-xs font-semibold text-slate-300 block mb-1.5">Core Competencies:</span>
              <div class="flex flex-wrap gap-1.5">
                ${skillsHtml}
              </div>
            </div>

            <div class="flex items-center gap-2 text-xs text-emerald-400 font-medium mb-5">
              <svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>${track.certificate}</span>
            </div>
          </div>

          <div class="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
            <span class="text-xs text-slate-400">Cohort Starting Soon</span>
            <button onclick="window.applyInternship('${track.id}')" class="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transition-all flex items-center gap-2">
              <span>Apply for Track</span>
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
          </div>
        </div>
      `;
    });

    internshipsContainer.innerHTML = html;
  }

  function filterInternships() {
    const domain = domainFilter?.value || 'all';
    const duration = durationFilter?.value || 'all';
    const q = (searchInput?.value || '').toLowerCase().trim();

    const filtered = allTracks.filter(track => {
      const matchDomain = domain === 'all' || track.domain.toLowerCase().includes(domain.toLowerCase()) || track.title.toLowerCase().includes(domain.toLowerCase());
      const matchDuration = duration === 'all' || track.duration.toLowerCase().includes(duration.toLowerCase());
      const matchQ = !q || track.title.toLowerCase().includes(q) || track.skills.some(s => s.toLowerCase().includes(q)) || track.eligibility.toLowerCase().includes(q);

      return matchDomain && matchDuration && matchQ;
    });

    renderTracks(filtered);
  }
  window.filterInternships = filterInternships;

  // Listeners
  if (domainFilter) domainFilter.addEventListener('change', filterInternships);
  if (durationFilter) durationFilter.addEventListener('change', filterInternships);
  if (searchInput) searchInput.addEventListener('input', filterInternships);

  // Initial Render
  renderTracks(allTracks);

  // Global helper
  window.applyInternship = (trackId) => {
    const track = allTracks.find(t => t.id === trackId);
    if (track && window.openAppModal) {
      window.openAppModal('internship-apply', track);
    }
  };
}
