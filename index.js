function displayDate() {
  let currentDate = document.querySelector("#current-date");
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes().toString().padStart(2, "0");
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];

  currentDate.innerHTML = `${day} ${hours}:${minutes}`;
}
displayDate();

function searchCity(event) {
  event.preventDefault();
  let enterCity = document.querySelector(".enter-city");
  let city = document.querySelector(".current-city");
  city.innerHTML = `${enterCity.value}`;

  function displayTemperature(response) {
    let selectedCity = response.data.city;
    let currentTemperature = Math.round(response.data.temperature.current);
    let city = document.querySelector(".current-city");
    city.innerHTML = selectedCity;
    let temperature = document.querySelector(".temperature-digit");
    temperature.innerHTML = currentTemperature;
  }

  let apiKey = "9b00a0b2o792ct546c043d35bf49a6e3";
  let displayCity = city.innerHTML;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${displayCity}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}
let form = document.querySelector("form");
form.addEventListener("submit", searchCity);
