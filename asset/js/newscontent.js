"use strict";

document.addEventListener("DOMContentLoaded", () => {
  let allNews = []; 
  async function loadNews() {
    try {
      const response = await fetch("./management/news.json");
      if (!response.ok) throw new Error("HTTPエラー: " + response.status);

      const data = await response.json();
      allNews = data.sort((a, b) => b.id - a.id); 

      renderNews(allNews.slice(0, 3));
    } catch (error) {
      console.error("ニュース読み込み失敗:", error);
    }
  }

  function renderNews(newsToDisplay) {
    const container = document.querySelector(".news-container");
    container.innerHTML = "";

    newsToDisplay.forEach((item) => {
      const ul = document.createElement("ul");
      ul.classList.add("news-list");
      ul.innerHTML = `
        <li class="news-day">${item.day}</li>
        <li class="news-category">${item.category}</li>
        <li class="news-ttl">${item.ttl}</li>
      `;
      ul.addEventListener("click", () => {
        window.location.href = `./news/detail.html?id=${item.id}`;
      });
      container.appendChild(ul);
    });
  }
  loadNews();
});
