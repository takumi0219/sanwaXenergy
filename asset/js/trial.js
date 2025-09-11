document.addEventListener("DOMContentLoaded", () => {
  const formInput = document.getElementById("form-input");
  const formConfirm = document.getElementById("form-confirm");
  const formComplete = document.getElementById("form-complete");
  const confirmBtn = document.getElementById("confirm-btn");
  const backBtn = document.getElementById("back-btn");
  const submitBtn = document.getElementById("submit-btn");

  const stepInput = document.getElementById("step-input");
  const stepConfirm = document.getElementById("step-confirm");
  const stepComplete = document.getElementById("step-complete");

  // 新しく追加
  const locationSelect = document.getElementById("location");
  const timeInput = document.getElementById("time");

  // 希望場所に応じて時間を自動入力する関数
  function setTimeByLocation() {
    const selectedLocation = locationSelect.value;
    if (selectedLocation === "東松山" || selectedLocation === "久喜") {
      timeInput.value = "19:00";
    } else if (selectedLocation === "上尾") {
      timeInput.value = "17:00";
    } else {
      timeInput.value = ""; // 選択肢がない場合は時間をクリア
    }
  }

  // 関数: 入力内容を取得し、確認画面と完了画面に設定する
  function setFormDataToConfirmAndComplete() {
    const name = document.getElementById("name").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const email = document.getElementById("email").value;
    const schoolName = document.getElementById("school-name").value;
    const grade =
      document.getElementById("grade").options[
        document.getElementById("grade").selectedIndex
      ].text;
    const location =
      document.getElementById("location").options[
        document.getElementById("location").selectedIndex
      ].text;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    const formattedDate = date.replace(/-/g, "/");
    const [hours, minutes] = time.split(":");
    const hour = parseInt(hours, 10);
    const ampm = hour >= 12 ? "午後" : "午前";
    const formattedHour = hour > 12 ? hour - 12 : hour;
    const formattedTime = `${ampm} ${formattedHour}:${minutes}`;

    const confirmDatetime = `${formattedDate} ${formattedTime}`;

    // 確認画面に内容をセット
    document.getElementById("confirm-name").textContent = name;
    document.getElementById("confirm-gender").textContent = gender;
    document.getElementById("confirm-email").textContent = email;
    document.getElementById("confirm-school-name").textContent = schoolName;
    document.getElementById("confirm-grade").textContent = grade;
    document.getElementById("confirm-location").textContent = location;
    document.getElementById("confirm-datetime").textContent = confirmDatetime;

    // 完了画面に内容をセット
    document.getElementById("complete-name").textContent = name;
    document.getElementById("complete-gender").textContent = gender;
    document.getElementById("complete-email").textContent = email;
    document.getElementById("complete-school-name").textContent = schoolName;
    document.getElementById("complete-grade").textContent = grade;
    document.getElementById("complete-location").textContent = location;
    document.getElementById("complete-datetime").textContent = confirmDatetime;
  }

  // イベントリスナーの追加
  locationSelect.addEventListener("change", setTimeByLocation);

  confirmBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const form = document.getElementById("contact-form");
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setFormDataToConfirmAndComplete();

    formInput.style.display = "none";
    formConfirm.style.display = "block";

    stepInput.classList.remove("active");
    stepConfirm.classList.add("active");
    stepComplete.classList.remove("active");
  });

  backBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formInput.style.display = "block";
    formConfirm.style.display = "none";

    stepConfirm.classList.remove("active");
    stepInput.classList.add("active");
  });

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // サーバーサイドへの送信処理（ここでは省略）
    // fetch('your-server-endpoint', {
    //     method: 'POST',
    //     body: new FormData(document.getElementById('contact-form'))
    // });

    // 完了画面へ切り替え
    formConfirm.style.display = "none";
    formComplete.style.display = "block";

    // ステップインジケーターを更新
    stepConfirm.classList.remove("active");
    stepComplete.classList.add("active");
  });
});
