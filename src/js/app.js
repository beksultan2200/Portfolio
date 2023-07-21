const burgerBtn = document.querySelector(".header-mobile-nav__burger");
const menu = document.querySelector(".header-mobile-menu");
const closeButton = document.querySelector("#close-btn");
const arr = []

const menuToggle = () => {
    menu.classList.toggle("active");
    document.body.classList.toggle("active");
}

