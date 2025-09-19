const accessSection = {
  higasimatuyama: {
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3225.792036377238!2d139.410213!3d36.04978099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018d4d6a7799aad%3A0xa565f6d9826123ca!2z5bKp6by75YWs5ZyS44OG44OL44K544Kz44O844OI!5e0!3m2!1sja!2sjp!4v1757397160220!5m2!1sja!2sjp",
    info: "〒355-0005 埼玉県東松山市松山2681",
    phone: "0493-23-7448",
    item1: "東松山駅から車で約7分",
    item2: "東松山ICから車で約5分",
  },
  ageo: {
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3229.1208490690105!2d139.6023143!3d35.9684708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018c5dd862e4ce1%3A0xc6ca104865ff2466!2z5LiK5bC-6YGL5YuV5YWs5ZyS!5e0!3m2!1sja!2sjp!4v1757397062499!5m2!1sja!2sjp",
    info: "〒362-0034 埼玉県上尾市愛宕3-28-30",
    phone: "048-771-4245",
    item1: "上尾駅から車で約10分",
    item2: "桶川北本ICから車で約15分",
  },
  kuki: {
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3225.8064182656512!2d139.57507402380364!3d36.04943004641081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018cc29ecf04683%3A0x40d775d122d72122!2z5qOu5LiL57eR5Zyw44Kw44Op44Km44Oz44OJ!5e0!3m2!1sja!2sjp!4v1757396780676!5m2!1sja!2sjp",
    info: "〒346-0113 埼玉県久喜市菖蒲町下栢間5495-1",
    phone: "0480-87-2616",
    item1: "久喜駅から車で約12分",
    item2: "久喜ICから車で約8分",
  },
};

const selectElement = document.getElementById("content-select-access");
const mapElement = document.querySelector(".map iframe");
const infoElement = document.querySelector(".access-info2");
const phoneElement = document.querySelector("dd.access-info2:last-child");
const item1Element = document.querySelector(
  ".access-how .access-item:first-child p"
);
const item2Element = document.querySelector(
  ".access-how .access-item:last-child p"
);

// マップと情報を更新する関数
function updateAccessInfo(location) {
  const data = accessSection[location];
  if (data) {
    mapElement.src = data.src;
    infoElement.textContent = data.info;
    phoneElement.textContent = data.phone;
    item1Element.textContent = data.item1;
    item2Element.textContent = data.item2;
  }
}

// セレクトボックスが変更されたときのイベントリスナー
selectElement.addEventListener("change", (event) => {
  const selectedValue = event.target.value;
  updateAccessInfo(selectedValue);
});

// ページ読み込み時に初期値を設定
updateAccessInfo(selectElement.value);

document.querySelector(".btn").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
