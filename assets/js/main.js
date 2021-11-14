// =============== SHOW MENU ===============
const getElement = (selector) => {
  const element = document.querySelector(selector);

  if (element) return element;
  throw Error(
    `Please double check your class or id names, there is no ${selector} class or id`
  );
};

// VARIABLES FOR SHOW MENU
const navMenu = getElement('#nav-menu');
const navToggle = getElement('#nav-toggle');
const navClose = getElement('#nav-close');

// LISTENTERS FOR SHOW MENU
navToggle.addEventListener('click', () => {
  navMenu.classList.add('show-menu');
});

navClose.addEventListener('click', () => {
  navMenu.classList.remove('show-menu');
});

// =============== REMOVE MENU MOBILE ===============
const navLinks = document.querySelectorAll('.nav__link');

const linkAction = () => {
  const navMenu = getElement('#nav-menu');

  navMenu.classList.remove('show-menu');
};

navLinks.forEach((element) => {
  element.addEventListener('click', linkAction);
});


// =============== CHANGE BACKGROUND HEADER ===============
const scrollHeader = () => {
  const header = getElement('#header');

  // case 1
  this.scrollY >= 80 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header');

  // case 2
  // if (this.scrollY >= 80) {
  //   header.classList.add('scroll-header');
  // } else {
  //   header.classList.remove('scroll-header');
  // }

};

window.addEventListener('scroll', scrollHeader);


// ===============  QUESTIONS ACCORDION ===============
const accordionItems = document.querySelectorAll('.questions__item');

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector('.questions__header');

  accordionHeader.addEventListener('click', () => {
    const openItem = document.querySelector('.accordion-open');

    toggleItem(item);

    if (openItem && openItem!== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector('.questions__content');

  if (item.classList.contains('accordion-open')) {
    accordionContent.removeAttribute('style');
    item.classList.remove('accordion-open');
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + 'px';
    item.classList.add('accordion-open');
  }
};


// ===============  SCROLL SECTIONS ACTIVE LINK ===============
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  });
};

window.addEventListener('scroll', scrollActive);

// =============== SHOW SCROLLUP ===============
const scrollUp = () => {
  const scroll = getElement('#scroll-up');

  this.scrollY > 200 ? scroll.classList.add('show-scroll') : scroll.classList.remove('show-scroll');
};

window.addEventListener('scroll', scrollUp);


/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});


// =============== SCROLLREAVEAL ANIMATION ===============
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true
});


sr.reveal(`.home__data`);
sr.reveal(`.home__img`, {delay: 500});
sr.reveal(`.home__social`, {delay: 600});
sr.reveal(`.about__img, .contact__box`, {origin: 'left'});
sr.reveal(`.about__data, .contact__form`, {origin: 'right'});
sr.reveal(`.steps__card, .product__card, .questions__group, .footer__container`, {interval: 100});