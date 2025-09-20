"use strict";

document.addEventListener("DOMContentLoaded", () => {
  let allNews = []; 
  async function loadNews() {
    try {
      const response = await fetch("../management/news.json");
      if (!response.ok) throw new Error("HTTPエラー: " + response.status);

      const data = await response.json();
      allNews = data.sort((a, b) => new Date(b.day) - new Date(a.day));

      renderNews("すべて");
    } catch (error) {
      console.error("ニュース読み込み失敗:", error);
    }
  }

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

    document.querySelector(".news-right .category").textContent = category;
  }

  const categoryItems = document.querySelectorAll(".category-item");
  const categorySelect = document.getElementById("content-select-members");

  categoryItems.forEach((item) => {
    item.addEventListener("click", () => {
      categoryItems.forEach((el) => el.classList.remove("active"));
      item.classList.add("active");

      const selectedCategory = item.textContent.trim();
      renderNews(selectedCategory);

      [...categorySelect.options].forEach((opt) => {
        opt.selected = opt.textContent.trim() === selectedCategory;
      });
    });
  });

  categorySelect.addEventListener("change", (e) => {
    const selectedCategory =
      e.target.options[e.target.selectedIndex].textContent.trim();

    renderNews(selectedCategory);

    categoryItems.forEach((el) => {
      el.classList.toggle("active", el.textContent.trim() === selectedCategory);
    });
  });

  loadNews();
});
