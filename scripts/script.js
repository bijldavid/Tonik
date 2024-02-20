console.log("hi");

var menuButton = document.querySelector("header > button");
var navMenu = document.querySelector("nav");
var deHeader = document.querySelector("header");
var body = document.body;

menuButton.onclick = toggleMenu;

function toggleMenu() {
  navMenu.classList.toggle("open");
  deHeader.classList.toggle("open");
  body.classList.toggle("scroll-lock"); // Add or remove the scroll-lock class
}


// Gemaakt met chatGPT
function updateElementClasses() {
  const elements = document.querySelectorAll('div:nth-of-type(2) div:nth-of-type(2) section:nth-of-type(1) h2, div:nth-of-type(2) div:nth-of-type(2) section:nth-of-type(1) h3, div:nth-of-type(2) div:nth-of-type(2) section:nth-of-type(1) ul li a p, div:nth-of-type(2) div:nth-of-type(2) section:nth-of-type(1) button');
  const viewportWidth = window.innerWidth;

  elements.forEach(element => {
    if (viewportWidth <= 770) {
      // Add the class if viewport width is 770px or less
      element.classList.add('visually-gone');
    } else {
      // Remove the class if viewport width is greater than 770px
      element.classList.remove('visually-gone');
    }
  });
}

// Add an event listener to check viewport width when the window resizes
window.addEventListener('resize', updateElementClasses);

// Call the function initially
updateElementClasses();