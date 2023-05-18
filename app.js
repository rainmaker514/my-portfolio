const hamburgerMenu = document.querySelector('#mobile-menu');
const navbarMenu = document.querySelector('.navbar_menu');
const menuLinks = document.querySelector('.navbar_items');
var typed = new Typed(".typed", {
    strings: ["Fullstack Web Developer", "Data Analyst", "Blogger"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

//display mobile menu
hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('is-active');
    navbarMenu.classList.toggle('active');
});

//close mobile menu on navbar menu click
navbarMenu.addEventListener('click', () => {
    if(window.innerWidth < 960){
        hamburgerMenu.classList.toggle('is-active');
        navbarMenu.classList.toggle('active');
    }
});