/**
 * SNR NEST — Courses & Training Module
 * Handles training program catalog, filter by domain, syllabus preview, and enrollment modal triggers.
 */

document.addEventListener('DOMContentLoaded', () => {
  initCoursesModule();
});

function initCoursesModule() {
  const coursesContainer = document.getElementById('courses-grid');
  const categoryFilter = document.getElementById('filter-course-category');

  if (!coursesContainer || !window.SNR_DATA || !window.SNR_DATA.training) return;

  const allCourses = window.SNR_DATA.training.courses;

  function renderCourses(courses) {
    let html = '';
    courses.forEach(course => {
      const skillsHtml = course.skills.map(s => `<span class="tag-pill text-xs text-rose-200/80 bg-rose-500/10 border-rose-500/20">${s}</span>`).join('');

      html += `
        <div class="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative group hover:border-rose-500/40">
          <div>
            <div class="flex items-start justify-between gap-3 mb-3">
              <span class="text-xs font-semibold tracking-wider text-rose-400 uppercase bg-rose-500/10 px-2.5 py-1 rounded-md border border-rose-500/20">${course.category}</span>
              <span class="text-xs text-slate-400 font-medium px-2.5 py-0.5 rounded bg-white/5">${course.level}</span>
            </div>

            <h3 class="text-xl font-bold text-white group-hover:text-rose-400 transition-colors font-heading mb-3">${course.name}</h3>

            <div class="grid grid-cols-2 gap-2.5 py-3 px-3.5 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300 mb-4">
              <div>
                <span class="text-slate-500 block text-[10px] uppercase font-semibold">Duration</span>
                <span class="font-medium text-slate-200">${course.duration}</span>
              </div>
              <div>
                <span class="text-slate-500 block text-[10px] uppercase font-semibold">Format</span>
                <span class="font-medium text-slate-200">${course.mode}</span>
              </div>
            </div>

            <div class="mb-4">
              <span class="text-xs font-semibold text-slate-300 block mb-1.5">🛠️ Capstone Project Build:</span>
              <p class="text-xs text-slate-400 leading-relaxed bg-slate-900/60 p-3 rounded-lg border border-white/5">${course.projects}</p>
            </div>

            <div class="mb-5">
              <span class="text-xs font-semibold text-slate-300 block mb-1.5">Curriculum & Stack:</span>
              <div class="flex flex-wrap gap-1.5">
                ${skillsHtml}
              </div>
            </div>

            <div class="p-3 rounded-xl bg-gradient-to-r from-emerald-500/10 to-transparent border border-emerald-500/20 text-xs text-emerald-400 font-medium mb-5 flex items-center gap-2">
              <svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              <span>${course.placementSupport}</span>
            </div>
          </div>

          <div class="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
            <span class="text-xs text-slate-400">Batches Enrolling</span>
            <button onclick="window.enrollCourse('${course.id}')" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 text-white font-bold text-sm shadow-lg shadow-rose-500/20 hover:shadow-rose-500/35 transition-all flex items-center gap-2">
              <span>Enroll Now</span>
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
          </div>
        </div>
      `;
    });

    coursesContainer.innerHTML = html;
  }

  function filterCourses() {
    const cat = categoryFilter?.value || 'all';
    const filtered = allCourses.filter(course => {
      return cat === 'all' || course.category.toLowerCase().includes(cat.toLowerCase());
    });
    renderCourses(filtered);
  }

  if (categoryFilter) categoryFilter.addEventListener('change', filterCourses);

  // Initial Render
  renderCourses(allCourses);

  // Global helper
  window.enrollCourse = (courseId) => {
    const course = allCourses.find(c => c.id === courseId);
    if (course && window.openAppModal) {
      window.openAppModal('course-enroll', course);
    }
  };
}
