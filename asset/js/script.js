"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const hum = document.querySelector(".hamburger");
  const header = document.querySelector(".header");
  const nav = document.querySelector(".nav-list");
  const navLine = document.querySelectorAll(".line");

  hum.addEventListener("click", () => {
    nav.classList.toggle("active");
    header.classList.toggle("active");
    navLine.forEach((line) => {
      line.classList.toggle("active");
    });
  });
});
