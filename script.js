// Set current year in footer
(function () {
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
})();

// Staggered fade-up animation for elements with .animate
document.addEventListener('DOMContentLoaded', () => {
  const animEls = document.querySelectorAll('.animate');
  animEls.forEach((el, idx) => {
    setTimeout(() => {
      el.classList.add('in');
    }, idx * 150);
  });
}); 