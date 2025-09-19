document.addEventListener('DOMContentLoaded', function() {
      const circle = document.querySelectorAll(".circle");
  const slide = document.querySelectorAll(".slide");
  let current = 0;

  setInterval(() => {
    slide.forEach((s) => s.classList.remove("active"));
    circle.forEach((c) => c.classList.remove("active"));

    slide[current].classList.add("active");
    circle[current].classList.add("active");

    current = (current + 1) % slide.length;
  }, 5000);
}
);