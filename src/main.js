// --- Scroll Reveal Animation Logic ---

const revealElements = document.querySelectorAll('.scroll-reveal');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight / 5 * 4;

  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < triggerBottom) {
      element.classList.add('visible');
    } else {
      // Optional: remove class to re-animate on scroll up
      // element.classList.remove('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);

// Initial check in case elements are already in view on page load
revealOnScroll();