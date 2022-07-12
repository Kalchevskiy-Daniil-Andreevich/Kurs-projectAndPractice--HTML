let header__burger = document.querySelector(".header__burger");
let header__menu = document.querySelector(".header__menu");
let menu__list = document.querySelector(".menu__list");

header__burger.addEventListener("click", mobileMenu);

function mobileMenu() {
    header__burger.classList.toggle("active");
    menu__list.classList.toggle("active");
    header__menu.classList.toggle("active");
}

const menu__link = document.querySelectorAll(".menu__link");

menu__link.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    header__burger.classList.remove("active");
    menu__list.classList.remove("active");
    header__menu.classList.remove("active");
}