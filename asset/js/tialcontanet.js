const trialContainer = document.querySelector(".trial-container");

function updateFillHeight() {
  const containerTop = trialContainer.offsetTop;
  const containerHeight = trialContainer.offsetHeight;
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const scrollBottom = scrollY + windowHeight;

  let fillHeight = 0;

  if (scrollBottom <= containerTop) {
    fillHeight = 0;
  } else if (scrollY >= containerTop + containerHeight) {
    fillHeight = containerHeight;
  } else {
    const progress =
      (scrollBottom - containerTop) / (containerHeight + windowHeight);
    fillHeight = containerHeight * Math.min(1, progress);
  }

  trialContainer.style.setProperty("--fill-height", `${fillHeight}px`);
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        window.addEventListener("scroll", updateFillHeight);
        updateFillHeight();
      } else {
        window.removeEventListener("scroll", updateFillHeight);
      }
    });
  },
  { threshold: 0 }
);

observer.observe(trialContainer);
