let menuIcon = document.querySelector('.header--menu-icon');
let mobileNav = document.querySelector('.side-navigation');

menuIcon.addEventListener('click', () => {
    mobileNav.classList.toggle('side-navigation__open');
    menuIcon.classList.toggle('header--menu-icon--close-x');
});
