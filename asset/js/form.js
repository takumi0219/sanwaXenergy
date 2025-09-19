// form.js
document
  .getElementById("add-product-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("category", document.getElementById("category").value);
    formData.append("ttl", document.getElementById("ttl").value);
    formData.append("content", document.getElementById("content").value);
    const imageFile = document.getElementById("image").files[0];
    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      const response = await fetch("save.php", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.status === "success") {
        alert("ニュースが追加されました！");
        e.target.reset();
      } else {
        alert("エラー: " + data.message);
      }
    } catch (error) {
      console.error("通信エラー:", error);
      alert("通信中にエラーが発生しました。");
    }
  });
