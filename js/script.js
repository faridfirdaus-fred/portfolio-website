// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});
// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const navFixed = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > navFixed) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// klik diluar
window.addEventListener("click", function (e) {
  e.target != hamburger && e.target != navMenu
    ? (hamburger.classList.remove("hamburger-active"),
      navMenu.classList.add("hidden"))
    : null;
});

// Darkmode Toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function (e) {
  darkToggle.checked
    ? (html.classList.add("dark"), (localStorage.theme = "dark"))
    : (html.classList.remove("dark"), (localStorage.theme = "light"));
});

// pindahkan posisi toggle saat darkmode
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
