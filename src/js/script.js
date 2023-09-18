`use strict`;

const hamburgerIcon = document.getElementById(`menu-btn`);
const mobileMenu = document.getElementById(`menu`);

const openNav = () => {
    mobileMenu.classList.remove(`close-mobile`);
    mobileMenu.classList.add(`open-mobile`);
}

const closeNav = () => {
    mobileMenu.classList.add(`close-mobile`);
    mobileMenu.classList.remove(`open-mobile`);
}

hamburgerIcon.addEventListener(`click`, function () {

    hamburgerIcon.classList.toggle(`open`);
    hamburgerIcon.classList.contains(`open`) ? openNav() : closeNav();
    
});