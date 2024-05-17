// Toggle class navbar
const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = (e) => {
  e.preventDefault();
  navbarNav.classList.toggle("active");
};

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Scroll navbar
const navbarColor = document.querySelector(".navbar");

document.addEventListener("scroll", function (e) {
  var scrollPosition = window.scrollY;
  if (scrollPosition > 500) {
    navbarColor.style.backgroundColor = "#010101";
  } else {
    navbarColor.style.backgroundColor = "transparent";
  }
});
