document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("#birthdate-form");
  const result = document.querySelector("#result");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const birthdateInput = document.querySelector("#birthdate");
    const birthdate = new Date(birthdateInput.value);

    if (isNaN(birthdate)) {
      result.innerHTML = "Invalid date. Please select a valid birthdate.";
    } else {
      const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const dayOfWeek = daysOfWeek[birthdate.getUTCDay()];
      result.innerHTML = `Your house was built on ${dayOfWeek}.`;
    }
  });
});

