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

  const coaches = [
    {
      coach: "coach01",
      name: "村田拓未",
      posi: "前衛",
      comment: "いつも元気に頑張ってます！",
      img: "asset/img/murata.png",
    },
    {
      coach: "coach02",
      name: "佐藤太郎",
      posi: "後衛",
      comment: "守備のスペシャリストです！",
      img: "asset/img/murata.png",
    },
    {
      coach: "coach03",
      name: "鈴木花子",
      posi: "前衛",
      comment: "スマッシュが得意です！",
      img: "asset/img/murata.png",
    },
    {
      coach: "coach04",
      name: "田中一郎",
      posi: "後衛",
      comment: "戦略的なプレーが得意です！",
      img: "asset/img/murata.png",
    },
    {
      coach: "coach05",
      name: "山本健",
      posi: "前衛",
      comment: "攻撃的なプレースタイルです！",
      img: "asset/img/murata.png",
    },
  ];

  const contentSelect = document.getElementById("content-select-members");
  const contentArea = document.querySelector(".member-container");

  // 表示する内容を定義
  const contents = {
    higasimatuyama: [
      {
        id: 1,
        img: "asset/img/murata.png",
        name: "村田 太郎",
        position: "前衛",
        comment:
          "チームのムードメーカー。明るい性格で、みんなを元気づける存在です。",
      },
      {
        id: 2,
        img: "asset/img/murata.png",
        name: "村田 太郎",
        position: "前衛",
        comment:
          "チームのムードメーカー。明るい性格で、みんなを元気づける存在です。",
      },
      {
        id: 3,
        img: "asset/img/murata.png",
        name: "村田 太郎",
        position: "前衛",
        comment:
          "チームのムードメーカー。明るい性格で、みんなを元気づける存在です。",
      },
      {
        id: 4,
        img: "asset/img/murata.png",
        name: "村田 太郎",
        position: "前衛",
        comment:
          "チームのムードメーカー。明るい性格で、みんなを元気づける存在です。",
      },
      {
        id: 1,
        img: "asset/img/murata.png",
        name: "村田 太郎",
        position: "前衛",
        comment:
          "チームのムードメーカー。明るい性格で、みんなを元気づける存在です。",
      },
      {
        id: 5,
        img: "asset/img/murata.png",
        name: "村田 太郎",
        position: "前衛",
        comment:
          "チームのムードメーカー。明るい性格で、みんなを元気づける存在です。",
      },
      {
        id: 6,
        img: "asset/img/murata.png",
        name: "村田 太郎",
        position: "前衛",
        comment:
          "チームのムードメーカー。明るい性格で、みんなを元気づける存在です。",
      },
    ],
    ageo: [
      {
        id: 1,
        img: "asset/img/murata.png",
        name: "村田 太郎",
        position: "前衛",
        comment:
          "チームのムードメーカー。明るい性格で、みんなを元気づける存在です。",
      },
      {
        id: 2,
        img: "asset/img/murata.png",
        name: "村田 太郎",
        position: "前衛",
        comment:
          "チームのムードメーカー。明るい性格で、みんなを元気づける存在です。",
      },
      {
        id: 3,
        img: "asset/img/murata.png",
        name: "村田 太郎",
        position: "前衛",
        comment:
          "チームのムードメーカー。明るい性格で、みんなを元気づける存在です。",
      },
      {
        id: 4,
        img: "asset/img/murata.png",
        name: "村田 太郎",
        position: "前衛",
        comment:
          "チームのムードメーカー。明るい性格で、みんなを元気づける存在です。",
      },
      {
        id: 1,
        img: "asset/img/murata.png",
        name: "村田 太郎",
        position: "前衛",
        comment:
          "チームのムードメーカー。明るい性格で、みんなを元気づける存在です。",
      },
    ],
    kuki: [
      {
        id: 1,
        img: "asset/img/murata.png",
        name: "村田 太郎",
        position: "前衛",
        comment:
          "チームのムードメーカー。明るい性格で、みんなを元気づける存在です。",
      },
      {
        id: 2,
        img: "asset/img/murata.png",
        name: "村田 太郎",
        position: "前衛",
        comment:
          "チームのムードメーカー。明るい性格で、みんなを元気づける存在です。",
      },
      {
        id: 3,
        img: "asset/img/murata.png",
        name: "村田 太郎",
        position: "前衛",
        comment:
          "チームのムードメーカー。明るい性格で、みんなを元気づける存在です。",
      },
      {
        id: 4,
        img: "asset/img/murata.png",
        name: "村田 太郎",
        position: "前衛",
        comment:
          "チームのムードメーカー。明るい性格で、みんなを元気づける存在です。",
      },
      {
        id: 1,
        img: "asset/img/murata.png",
        name: "村田 太郎",
        position: "前衛",
        comment:
          "チームのムードメーカー。明るい性格で、みんなを元気づける存在です。",
      },
      {
        id: 5,
        img: "asset/img/murata.png",
        name: "村田 太郎",
        position: "前衛",
        comment:
          "チームのムードメーカー。明るい性格で、みんなを元気づける存在です。",
      },
    ],
  };

  const keyMap = {
    東松山: "higasimatuya",
    上尾: "ageo",
    久喜: "kuki",
  };

  const limits = {
    higasimatuya: 6,
    ageo: 4,
    kuki: 5,
  };

  function renderMembers(selectValue) {
    const areaKey = keyMap[selectValue] ?? selectValue; // valueがローマ字でも日本語でもOK

    const all = contents[areaKey] || [];
    const list = all.slice(0, limits[areaKey] ?? all.length); // 上限で絞る

    if (!list.length) {
      contentArea.innerHTML = `<p>${selectValue} のデータは存在しません</p>`;
      return;
    }

    // まとめて描画（innerHTMLの連結より速くて安全）
    const html = list
      .map(
        (member) => `
    <div class="member">
      <img class="member-img" src="${member.img}" alt="${member.name}">
      <div class="member-text">
        <p class="name">${member.name}</p>
        <p class="position">${member.position}</p>
        <p class="comment">${member.comment}</p>
      </div>
    </div>
  `
      )
      .join("");

    contentArea.innerHTML = html;
  }

  // 初期表示
  renderMembers(contentSelect.value);

  // 選択変更で再描画
  contentSelect.addEventListener("change", (e) => {
    renderMembers(e.target.value);
  });

  const calendarDates = document.querySelector(".calendar-dates");
  const currentMonthEl = document.querySelector(".current-month");
  const prevButton = document.querySelector(".prev-month");
  const nextButton = document.querySelector(".next-month");

  let currentDate = new Date();

  function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // ヘッダーに年月を表示
    currentMonthEl.textContent = `${year}.${(month + 1)
      .toString()
      .padStart(2, "0")}`;

    // 日付をクリア
    calendarDates.innerHTML = "";

    // 今月1日の曜日を取得（0:日, 1:月...）
    const firstDay = new Date(year, month, 1).getDay();
    // 今月の最終日を計算
    const currentMonthLastDay = new Date(year, month + 1, 0).getDate();

    // 日曜日が0なので、月曜日始まりにする調整
    const firstDayOfWeek = firstDay === 0 ? 6 : firstDay - 1;

    // 画面の左上のスペースを埋めるための空要素
    for (let i = 0; i < firstDayOfWeek; i++) {
      const emptyDayEl = document.createElement("div");
      emptyDayEl.classList.add("day", "empty-day");
      calendarDates.appendChild(emptyDayEl);
    }

    // 今月の日付を追加
    for (let i = 1; i <= currentMonthLastDay; i++) {
      const dayEl = document.createElement("div");
      dayEl.classList.add("day");

      const dayNumber = document.createElement("span");
      dayNumber.textContent = i.toString().padStart(2, "0");
      dayEl.appendChild(dayNumber);

      // 今日をハイライトする
      const today = new Date();
      if (
        i === today.getDate() &&
        month === today.getMonth() &&
        year === today.getFullYear()
      ) {
        dayEl.classList.add("today");
      }
      calendarDates.appendChild(dayEl);
    }
  }

  // イベントリスナー
  prevButton.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
  });

  nextButton.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
  });

  // 初期表示
  renderCalendar();

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
});
