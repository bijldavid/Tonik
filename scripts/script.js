console.log("hi");

var menuButton = document.querySelector("header > button");
var navMenu = document.querySelector("nav");
var body = document.body;

menuButton.onclick = toggleMenu;

function toggleMenu() {
  navMenu.classList.toggle("open");
  body.classList.toggle("scroll-lock"); // Add or remove the scroll-lock class
}