const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const navbarLinks = document.querySelectorAll(".navbar-links");
const navbarMenu = document.getElementById("navbar-menu");

//COLLAPSES NAVBAR-MENU WHEN IN MOBILE VIEW AND MOBILE-MENU-TOGGLE CHECKBOX IS CHECKED
navbarLinks.forEach((navbarLink) => {
  navbarLink.addEventListener("click", () => {
    if (window.innerWidth < 960 && mobileMenuToggle.checked == true) {
      mobileMenuToggle.checked = false;
    }
  });
});

// TYPING EFFECT
var typed = new Typed(".typed", {
strings: ["Frontend", "Backend", "Fullstack"],
typeSpeed: 100,
backSpeed: 80,
backDelay: 2000,
loop: true
});
