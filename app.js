// const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
// const navbarLinks = document.querySelectorAll(".navbar-links");
// const navbarMenu = document.getElementById("navbar-menu");

// //COLLAPSES NAVBAR-MENU WHEN IN MOBILE VIEW AND MOBILE-MENU-TOGGLE CHECKBOX IS CHECKED
// navbarLinks.forEach((navbarLink) => {
//   navbarLink.addEventListener("click", () => {
//     if (window.innerWidth < 960 && mobileMenuToggle.checked == true) {
//       mobileMenuToggle.checked = false;
//     }
//   });
// });

// TYPING EFFECT
var typed = new Typed(".typed", {
  strings: ["Frontend", "Backend", "Fullstack"],
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
  loop: true,
});

// SCROLL REVEAL INIT
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

//SR HERO
sr.reveal(".hero-img", { delay: 700 });
sr.reveal(".hero-title", { delay: 500 });
sr.reveal(".hero-subtext", { delay: 300 });
sr.reveal(".resume-btn", { delay: 100 });

//SR SECTION TITLES
sr.reveal(".section-title", { delay: 100 });
sr.reveal(".border-container", { delay: 300, origin: "left" });

//SR ABOUT
sr.reveal(".about-text p:nth-child(1)", { delay: 100, origin: "bottom" });
sr.reveal(".about-text p:nth-child(2)", { delay: 100, origin: "bottom" });
sr.reveal(".about-text p:nth-child(3)", { delay: 100, origin: "bottom" });
sr.reveal(".about-text p:nth-child(4)", { delay: 100, origin: "bottom" });
sr.reveal(".about-icon", { delay: 100, origin: "bottom" });

//SR SKILLS
sr.reveal(".skills-subsection", { delay: 100, origin: "bottom" });

//SR PROJECTS
sr.reveal(".projects-item", { delay: 100, origin: "bottom" });

//SR CONTACT
sr.reveal(".contact-form", { delay: 100, origin: "bottom" });

