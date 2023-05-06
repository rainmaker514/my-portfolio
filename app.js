const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')
var typed = new Typed(".typed", {
    strings: ["Fullstack Web Developer", "Data Analyst", "Blogger"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

//display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
};

menu.addEventListener('click', mobileMenu);

