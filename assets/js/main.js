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