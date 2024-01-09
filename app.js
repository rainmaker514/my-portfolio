const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const navbarLinks = document.querySelectorAll(".navbar-links");
const navbarMenu = document.getElementById("navbar-menu");

// var typed = new Typed(".typed", {
//   strings: ["Fullstack Developer", "Software Engineer", "Blogger"],
//   typeSpeed: 100,
//   backSpeed: 100,
//   backDelay: 1000,
//   loop: true,
// });

navbarLinks.forEach((navbarLink) => {
  navbarLink.addEventListener("click", () => {
    if (
      window.innerWidth < 960 &&
      mobileMenuToggle.checked == true
    ) {
      mobileMenuToggle.checked = false;
    }
  });
});
