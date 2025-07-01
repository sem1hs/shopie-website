"use strict";

// Mobile Nav Toggle
const navbar = document.querySelector(".navbar");
const navToggler = document.querySelector(".nav-open-btn");

navToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
});

// Header Toggle
const header = document.querySelector(".header");
window.addEventListener("scroll", function () {
  header.classList[this.scrollY > 50 ? "add" : "remove"]("active");
});
