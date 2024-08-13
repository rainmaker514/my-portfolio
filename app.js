

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



