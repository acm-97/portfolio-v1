export const HideShowNav = () => {
  const navbar = document.querySelectorAll('.navbar');
  const button = document.querySelector('#fixed-button');

  let lastScrollY = window.scrollY;

  if (window.scrollY > 0) {
    navbar?.forEach((nav) => nav.classList.add('navbar-hiden', 'navbar-boxshadow'));
  }

  window.addEventListener('scroll', () => {
    if (lastScrollY < window.scrollY) {
      button?.classList.add('fixed-button');
      navbar?.forEach((nav) => nav.classList.add('navbar-hiden', 'navbar-boxshadow'));
    } else navbar?.forEach((nav) => nav.classList.remove('navbar-hiden'));

    if (window.scrollY === 0) {
      button?.classList.remove('fixed-button');
      navbar?.forEach((nav) => nav.classList.remove('navbar-boxshadow'));
    }

    lastScrollY = window.scrollY;
  });
};

export const showSections = () => {
  window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.section-hidden');

    reveals.forEach((item) => {
      const windowHeight = window.innerHeight;
      const revealTop = item.getBoundingClientRect().top;
      const revealPoint = 150;

      if (revealTop < windowHeight - revealPoint) {
        item.classList.remove('section-hidden');
        item.classList.add('section-active');
      }
    });
  });
};
