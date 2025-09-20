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

  const locationSelect = document.getElementById("location");
  const timeInput = document.getElementById("time");

  function setTimeByLocation() {
    const selectedLocation = locationSelect.value;
    if (selectedLocation === "東松山" || selectedLocation === "久喜") {
      timeInput.value = "19:00";
    } else if (selectedLocation === "上尾") {
      timeInput.value = "17:00";
    } else {
      timeInput.value = "";
    }
  }

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

    document.getElementById("confirm-name").textContent = name;
    document.getElementById("confirm-gender").textContent = gender;
    document.getElementById("confirm-email").textContent = email;
    document.getElementById("confirm-school-name").textContent = schoolName;
    document.getElementById("confirm-grade").textContent = grade;
    document.getElementById("confirm-location").textContent = location;
    document.getElementById("confirm-datetime").textContent = confirmDatetime;

    document.getElementById("complete-name").textContent = name;
    document.getElementById("complete-gender").textContent = gender;
    document.getElementById("complete-email").textContent = email;
    document.getElementById("complete-school-name").textContent = schoolName;
    document.getElementById("complete-grade").textContent = grade;
    document.getElementById("complete-location").textContent = location;
    document.getElementById("complete-datetime").textContent = confirmDatetime;
  }

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

  submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbybi0PEXx26W0cxWXzwFsrnDYPd6ko2JrOVBmf9DEg0Qf7SSX2ClhrxwI7pRRwpai25iA/exec";

    const form = document.getElementById("contact-form");
    const formData = new FormData(form); // これをそのまま使う
    try {
      const res = await fetch(scriptURL, {
        method: "POST",
        body: formData, 
      });

      const data = await res.text(); 
      console.log("送信成功:", data);

      form.reset();
    } catch (err) {
      console.error("送信成功");
    }

    formConfirm.style.display = "none";
    formComplete.style.display = "block";
    stepConfirm.classList.remove("active");
    stepComplete.classList.add("active");
  });
});
