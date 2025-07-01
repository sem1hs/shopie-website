"use strict";

// Mobile Nav Toggle
const navbar = document.querySelector(".navbar");
const navToggler = document.querySelector(".nav-open-btn");
const header = document.querySelector(".header");

navToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
  header.classList.toggle("nav-active");
});

// Header Toggle
window.addEventListener("scroll", function () {
  header.classList[this.scrollY > 50 ? "add" : "remove"]("active");
});
