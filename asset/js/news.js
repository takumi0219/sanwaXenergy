"use strict";

document.addEventListener("DOMContentLoaded", () => {
  let allNews = []; // 全ニュースを保持する

  async function loadNews() {
    try {
      const response = await fetch("../management/news.json");
      if (!response.ok) throw new Error("HTTPエラー: " + response.status);

      const data = await response.json();
      allNews = data.sort((a, b) => new Date(b.day) - new Date(a.day));

      // 初期は「すべて」で表示
      renderNews("すべて");
    } catch (error) {
      console.error("ニュース読み込み失敗:", error);
    }
  }

  // ニュース描画
  function renderNews(category) {
    const container = document.querySelector(".news-container");
    container.innerHTML = "";

    const filtered =
      category === "すべて"
        ? allNews
        : allNews.filter((item) => item.category === category);

    filtered.forEach((item) => {
      const ul = document.createElement("ul");
      ul.classList.add("news-list");
      ul.innerHTML = `
        <li class="news-day">${item.day}</li>
        <li class="news-category">${item.category}</li>
        <li class="news-ttl">${item.ttl}</li>
      `;
      ul.addEventListener("click", () => {
        window.location.href = `../news/detail.html?id=${item.id}`;
      });
      container.appendChild(ul);
    });

    // タイトルを同期
    document.querySelector(".news-right .category").textContent = category;
  }

  // 左メニューとセレクト
  const categoryItems = document.querySelectorAll(".category-item");
  const categorySelect = document.getElementById("content-select-members");

  // 左メニュークリック時
  categoryItems.forEach((item) => {
    item.addEventListener("click", () => {
      categoryItems.forEach((el) => el.classList.remove("active"));
      item.classList.add("active");

      const selectedCategory = item.textContent.trim();
      renderNews(selectedCategory);

      // select と同期
      [...categorySelect.options].forEach((opt) => {
        opt.selected = opt.textContent.trim() === selectedCategory;
      });
    });
  });

  // セレクト変更時
  categorySelect.addEventListener("change", (e) => {
    const selectedCategory =
      e.target.options[e.target.selectedIndex].textContent.trim();

    renderNews(selectedCategory);

    // 左メニューと同期
    categoryItems.forEach((el) => {
      el.classList.toggle("active", el.textContent.trim() === selectedCategory);
    });
  });

  loadNews();
});
