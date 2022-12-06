'use strict';

const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector("nav");
const menuNav = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-link");
let showMenu = false;
menuBtn.addEventListener("click", toggleMenu);
function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");
    navItems.forEach((item) => item.classList.add("open"));
    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    navItems.forEach((item) => item.classList.remove("open"));
    showMenu = false;
  }
}


const navbar = document.querySelector('.navbar');
const features = document.querySelector('.features');
const company = document.querySelector('.company');
const navLinks = document.querySelector('.nav-links');
const navbarMainLinks = document.querySelectorAll('.nav-link');
const navbarLinksWrapper = document.querySelector('.nav-log-links-container');

const arrowDown = document.querySelectorAll('.icon-arrow');

const featuresContent = document.querySelector('.features-dropdown');
const companyContent = document.querySelector('.company-dropdown');

let browserWidth = window.innerWidth;


//  Navbar

navbar.addEventListener('click', e => {
  const target = e.target;
  if (target === navbarMainLinks[0]) {
    featuresContent.classList.toggle('hide-content');
  } else {
    featuresContent.classList.add('hide-content');
  }

  if (target === navbarMainLinks[1]) {
    companyContent.classList.toggle('hide-content');
  } else {
    companyContent.classList.add('hide-content');
  }

  // Replace arrow img based on popup content state
  if (!featuresContent.classList.contains('hide-content')) {
    arrowDown[0].src = 'images/icon-arrow-up.svg';
  } else {
    arrowDown[0].src = 'images/icon-arrow-down.svg';
  }

  if (!companyContent.classList.contains('hide-content')) {
    arrowDown[1].src = 'images/icon-arrow-up.svg';
  } else {
    arrowDown[1].src = 'images/icon-arrow-down.svg';
  }
});

