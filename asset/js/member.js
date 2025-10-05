const contentSelect = document.getElementById("content-select-members");
const contentArea = document.querySelector(".member-container");

const contents = {
  higasimatuyama: [
    {
      id: 1,
      img: "asset/img/kuse.png",
      name: "久世 浩",
      position: "前衛",
      comment:
        "チームのムードメーカー。明るい性格で、みんなを元気づける存在です。",
    },
    {
      id: 2,
      img: "asset/img/nisikaaw.png",
      name: "西川 光治",
      position: "前衛",
      comment:
        "チームのムードメーカー。明るい性格で、みんなを元気づける存在です。",
    },
    {
      id: 3,
      img: "asset/img/utida.png",
      name: "内田 大貴",
      position: "後衛",
      comment:
        "チームのムードメーカー。明るい性格で、みんなを元気づける存在です。",
    },
    {
      id: 4,
      img: "asset/img/murata.png",
      name: "村田 拓未",
      position: "前衛",
      comment:
        "チームのムードメーカー。明るい性格で、みんなを元気づける存在です。",
    },
    {
      id: 5,
      img: "asset/img/hirata.png",
      name: "平田 直哉",
      position: "後衛",
      comment:
        "チームのムードメーカー。明るい性格で、みんなを元気づける存在です。",
    },
    {
      id: 6,
      img: "asset/img/tadika.png",
      name: "田近 唯人",
      position: "後衛",
      comment:
        "チームのムードメーカー。明るい性格で、みんなを元気づける存在です。",
    }
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
  const areaKey = keyMap[selectValue] ?? selectValue;

  const all = contents[areaKey] || [];
  const list = all.slice(0, limits[areaKey] ?? all.length);

  if (!list.length) {
    contentArea.innerHTML = `<p>${selectValue} のデータは存在しません</p>`;
    return;
  }

  const html = list
    .map((member) => {
      const imgSrc =
        member.img && member.img.trim() !== ""
          ? member.img
          : "asset/img/comingsoon.svg";

      return `
        <div class="member">
          <img class="member-img" src="${imgSrc}" alt="${member.name}" onerror="this.src='asset/img/cammingsoon.svg'">
          <div class="member-text">
            <p class="name">${member.name}</p>
            <p class="position">${member.position}</p>
            <p class="comment">${member.comment}</p>
          </div>
        </div>
      `;
    })
    .join("");

  contentArea.innerHTML = html;
}


renderMembers(contentSelect.value);

contentSelect.addEventListener("change", (e) => {
  renderMembers(e.target.value);
});
