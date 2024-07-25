// Menu Toggle
const menuToggle = document.querySelector('.toggle');
const aboutme = document.querySelector('.aboutme');

menuToggle.addEventListener('click', function() {
  menuToggle.classList.toggle('active');
  aboutme.classList.toggle('active');
});


// Initialize AOS (Animate On Scroll) Library
AOS.init({
  offset: 400,
  duration: 1000
});

// Initialize ScrollReveal
window.sr = ScrollReveal();
sr.reveal('.navbar', {
  duration: 2000,
  origin: 'bottom'
});

// Scroll to Top Functionality
let mybutton = document.getElementById("ToTopWrapper");

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
