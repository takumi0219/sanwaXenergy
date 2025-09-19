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
