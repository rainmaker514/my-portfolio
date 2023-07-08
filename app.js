const hamburgerMenu = document.querySelector("#mobile-menu");
const navbarMenu = document.querySelector(".navbar-menu");
const menuLinks = document.querySelector(".navbar-items");
const icon = document.querySelector('.fa-bars');
const modal = document.querySelector(".blogs-modal");
const openModal = document.querySelector("#blogs");
const closeModal = document.querySelector(".close-modal");

var typed = new Typed(".typed", {
  strings: ["Fullstack Web Developer", "Software Engineer", "Blogger"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

//display mobile menu
hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("is-active");
  navbarMenu.classList.toggle("active");
  icon.classList.toggle('fa-xmark');
});

//close mobile menu on navbar menu click
navbarMenu.addEventListener("click", () => {
  if (window.innerWidth < 960) {
    hamburgerMenu.classList.toggle("is-active");
    navbarMenu.classList.toggle("active");
    icon.classList.toggle('fa-xmark');
  }
});

//modal event listeners
openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});



// PARTICLE.JS CONFIG
particlesJS("particles-js", {"particles":{"number":{"value":160,"density":{"enable":true,"value_area":800}},"color":{"value":"#8400ff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"bubble"},"onclick":{"enable":false,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});

particlesJS("particles-js1", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#8400ff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#8400ff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"grab"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});