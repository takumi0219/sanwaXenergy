"use strict";

document.addEventListener("DOMContentLoaded", () => {
  async function loadNews() {
    try {
      const response = await fetch("./news.json");

      if (!response.ok) {
        throw new Error("HTTPエラー: " + response.status);
      }

      const data = await response.json();

      // 以下、処理は前と同じ
      const sorted = data.sort((a, b) => new Date(b.day) - new Date(a.day));
      const latest3 = sorted.slice(0, 3);

      const container = document.getElementById("news-container");
      container.innerHTML = "";

      latest3.forEach((item) => {
        const ul = document.createElement("ul");
        ul.classList.add("news-list");
        ul.innerHTML = `
        <li class="news-day">${item.day}</li>
        <li class="news-category">${item.category}</li>
        <li class="news-ttl">${item.ttl}</li>
      `;
        container.appendChild(ul);
      });
    } catch (error) {
      console.error("ニュース読み込み失敗:", error);
    }
  }


  loadNews();

  const categoryItems = document.querySelectorAll(".category-item");
  const categoryTitle = document.querySelector(".news-right .category");
  const newsLists = document.querySelectorAll(".news-list");
  const categorySelect = document.getElementById("content-select-members");

  // ニュースのフィルタリング処理
  function filterNews(selectedCategory) {
    categoryTitle.textContent = selectedCategory;

    newsLists.forEach((news) => {
      const newsCategory = news
        .querySelector(".news-category")
        .textContent.trim();

      if (selectedCategory === "すべて" || newsCategory === selectedCategory) {
        news.style.display = "flex";
      } else {
        news.style.display = "none";
      }
    });
  }

  // 左メニュークリック時
  categoryItems.forEach((item) => {
    item.addEventListener("click", () => {
      categoryItems.forEach((el) => el.classList.remove("active"));
      item.classList.add("active");

      const selectedCategory = item.textContent.trim();
      filterNews(selectedCategory);

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
    filterNews(selectedCategory);

    // 左のリストと同期
    categoryItems.forEach((el) => {
      el.classList.toggle("active", el.textContent.trim() === selectedCategory);
    });
  });
});
