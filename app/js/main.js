// Prototype mobile menu. Opens/Closes Menu by toggling css display value between none and block
function openMobileMenu() {
  var menu = document.querySelectorAll('nav');
  var hidden = getComputedStyle(menu[0])["display"];

  // displays/hides menu depending on status
  menu[0].style.display = hidden == 'none' ?  'block' : 'none'; 
}

// DOM variables

// Open Menu btn
var slideLeftBtn = document.querySelector('#hamburger-button');

// Main menu
var slideMenu = document.querySelector('#main-menu');

// Close menu btn
var closeMenuBtn = document.querySelector('#slide-menu-close-btn');

// Opens menu when open btn is clicked
slideLeftBtn.addEventListener('click', function(e) {
  e.preventDefault;

  var cl = 'is-active';

  if (slideMenu.classList) {
    slideMenu.classList.add(cl);
  } else {
    slideMenu.className += ' ' + cl;
  }
});

// Closes menu when open btn is clicked
closeMenuBtn.addEventListener('click', function(e) {
  e.preventDefault;

  var cl = 'is-active';

  if (slideMenu.classList) {
    slideMenu.classList.remove(cl);
  }
});