const trialContainer = document.querySelector(".trial-container");

function updateFillHeight() {
  const containerTop = trialContainer.offsetTop;
  const containerHeight = trialContainer.offsetHeight;
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const scrollBottom = scrollY + windowHeight;

  let fillHeight = 0;

  if (scrollBottom <= containerTop) {
    // まだ container に入っていない
    fillHeight = 0;
  } else if (scrollY >= containerTop + containerHeight) {
    // container を通り過ぎた
    fillHeight = containerHeight;
  } else {
    // container 内をスクロールしている
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
        // trial-container に到達したら監視開始
        window.addEventListener("scroll", updateFillHeight);
        updateFillHeight();
      } else {
        // 画面外に出たら監視解除
        window.removeEventListener("scroll", updateFillHeight);
      }
    });
  },
  { threshold: 0 }
);

observer.observe(trialContainer);
