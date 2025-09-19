const spaceData = [
  {
    title: "東松山庭球場",
    time: "毎週土曜日・日曜日<br>19:00~21:00",
    img: "../asset/img/higasimatuyama.png",
  },
  {
    title: "上尾総合運動公園",
    time: "毎週月曜日<br>17:00~19:00 小学生向け<br>17:00~19:00 中学生・高校生向け",
    img: "../asset/img/higasimatuyama.png",
  },
  {
    title: "森下緑地グラウンド",
    time: "毎週木曜日<br>19:00~21:00",
    img: "../asset/img/higasimatuyama.png",
  },
];

const aboutNavList = document.querySelectorAll(".about-nav-list");
const aboutSpace = document.querySelector(".about-space-text-ttl");
const aboutSpaceTime = document.querySelector(".about-space-text-time");
const aboutSpaceImg = document.querySelector(".about-space-img");

aboutNavList.forEach((item, index) => {
  item.addEventListener("click", () => {
    aboutNavList.forEach((nav) => nav.classList.remove("active"));
    item.classList.add("active");

    aboutSpace.textContent = spaceData[index].title;
    aboutSpaceTime.innerHTML = spaceData[index].time;
    aboutSpaceImg.src = spaceData[index].img;
  });
});
