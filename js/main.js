//SWIPER
let homeSwiper = new Swiper(".home-swiper", {
  spaceBetween: 30,
  loop: "true",
  autoplay: {
    delay: 5000, // 3 segundos
    disableOnInteraction: false, // Para que no se detenga si el usuario interactúa
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
let newSwiper = new Swiper(".new-swiper", {
  centeredSlides: true,
  slidesPerView: "auto",
  loop: "true",
  spaceBetween: 16,
});
let teamSwiper = new Swiper(".team__container", {
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 24,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  grabCursor: true,
});

let alliesSwiper = new Swiper(".allies-swiper", {
  slidesPerView: "auto",
  spaceBetween: 40,
  loop: true,
  freeMode: true,
  autoplay: {
    delay: 1, // Inicia inmediatamente
    disableOnInteraction: false,
  },
  speed: 5000, // Velocidad de la transición
  grabCursor: true,
  breakpoints: {
    768: {
      slidesPerView: 5, // Muestra 5 logos en escritorio
    },
  },
});
/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById('header');
  if (header) {
    const navLinks = document.querySelectorAll('.nav__link');
    const navLogo = document.querySelector('.nav__logo');
    const navButton = document.querySelector('.nav .button--ghost');
    const navToggle = document.querySelector('.nav__toggle');
    const whiteColor = 'hsl(207, 4%, 95%)'; // var(--title-color)
    const blueColor = '#2b3354'; // Color inicial del texto

    // Cuando el scroll es mayor a 50 de alto del viewport
    if (this.scrollY >= 50) {
      header.style.backgroundColor = 'rgba(15, 23, 42, 0.8)';
      // Cambiar color de texto a blanco
      if (navLogo) navLogo.style.color = whiteColor;
      if (navButton) navButton.style.color = whiteColor;
      if (navToggle) navToggle.style.color = '#d0d5eb';
      navLinks.forEach(link => link.style.color = whiteColor);
    } else {
      header.style.backgroundColor = 'transparent';
      // Revertir color de texto a azul
      if (navLogo) navLogo.style.color = blueColor;
      if (navButton) navButton.style.color = blueColor;
      if (navToggle) navToggle.style.color = '#d0d5eb';
      navLinks.forEach(link => link.style.color = '#d0d5eb');
      if (navToggle) navToggle.style.color = blueColor;
      navLinks.forEach(link => link.style.color = blueColor);
    }
  }
}
window.addEventListener("scroll", scrollHeader);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;
  const navLinks = document.querySelectorAll('.nav__menu a.nav__link');

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute('id');
    const linkSelector = `.nav__menu a[href*=${sectionId}]`;
    const navLink = document.querySelector(linkSelector);

    if (navLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        // Primero, removemos la clase de todos los enlaces
        navLinks.forEach(link => link.classList.remove('active-link'));
        // Luego, la añadimos solo al enlace actual
        navLink.classList.add('active-link');
      }
    }
  });
}
window.addEventListener('scroll', scrollActive);

//Scroll up
function scrollUp() {
  const scrollup = document.getElementById("scroll-up");
  if (this.scrollY >= 460) scrollup.classList.add("show-scroll");
  else scrollup.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

//Scroll reveal
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  
});
sr.reveal(`.home-swiper,.new-swiper, .newsletter__container`);
sr.reveal(`.category__data, .trick__content, .footer__content`, {
  interval: 100,
});
sr.reveal(`.about__data, .discount__img`, { origin: "left" });
sr.reveal(`.about__img, .discount__data`, { origin: "right" });
