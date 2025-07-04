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

  // Auto-reveal project descriptions on touch devices when in view
  if (window.matchMedia('(hover: none)').matches) {
    // Root margin shrinks the viewport so intersection only triggers near center (~10% band)
    const observerOptions = {
      root: null,
      rootMargin: '-45% 0px -45% 0px', // central 10% vertical slice
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const overlay = entry.target.querySelector('.project__overlay-desc');
        if (!overlay) return;
        if (entry.isIntersecting) {
          overlay.classList.add('visible');
        } else {
          overlay.classList.remove('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.project--image').forEach((card) => observer.observe(card));
  }
}); 