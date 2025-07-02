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

  // Mobile nav toggle
  const navToggle = document.querySelector('.nav__toggle');
  const nav = document.querySelector('.nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', (!expanded).toString());
    });

    // Close menu when a link is clicked (optional)
    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
}); 