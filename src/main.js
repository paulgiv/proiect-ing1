// --- Scroll Reveal Animation Logic ---
const revealElements = document.querySelectorAll('.scroll-reveal');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight / 5 * 4;

  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < triggerBottom) {
      element.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
// Initial check
revealOnScroll();

// --- Back to Top Button Logic ---
const topBtn = document.querySelector('.btn-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    topBtn.classList.add('show');
  } else {
    topBtn.classList.remove('show');
  }
});