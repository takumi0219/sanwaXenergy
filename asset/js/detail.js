document.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  try {
    const response = await fetch("../management/news.json");
    const data = await response.json();

    const item = data.find((news) => news.id == id);

    if (item) {
      document.getElementById("detail-title").textContent = item.ttl;
      document.getElementById("detail-day").textContent = item.day;
      document.getElementById("detail-category").textContent = item.category;
      document.getElementById("detail-content").innerHTML = item.content;

      const imageContainer = document.getElementById("detail-image");
      if (item.img) {
        const img = document.createElement("img");
        img.src = item.img;
        img.alt = item.ttl;
        imageContainer.appendChild(img);
      }
    } else {
      document.getElementById("detail-title").textContent =
        "記事が見つかりません";
    }
  } catch (error) {
    console.error("詳細読み込み失敗:", error);
  }
});
