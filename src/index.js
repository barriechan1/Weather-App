function formatDate() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[currentTime.getDay()];
  let date = currentTime.getDate();
  if (date < 10) {
    date = `0${date}`;
  }
  let hour = currentTime.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = currentTime.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day}, ${date}, ${hour}:${minutes}`;
}
let h2 = document.querySelector("#todays-date-and-time");
let currentTime = new Date();
h2.innerHTML = formatDate(currentTime);

function showTemperature(response) {
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("#main-temp").innerHTML = Math.round(
    response.data.main.temp
  );
}

function showInput(event) {
  event.preventDefault();
  // let searchInput = document.querySelector("#city-search");
  //let cityInput = document.querySelector("h1");
  //cityInput.innerHTML = searchInput.value;
  let apiKey = "720611257f683e4c21c243913abd2051";
  let city = document.querySelector("#city-search").value;
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid${apiKey}&units=${units}`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}

let input = document.querySelector("form");
input.addEventListener("submit", showInput);

//function convertToCelsius(event) {
//event.preventDefault();
//let temperatureElement = document.querySelector("#main-temp");
//let temperature = temperatureElement.innerHTML;
//temperature = 59;
//temperatureElement.innerHTML = `${Math.round(((temperature - 32) * 5) / 9)}º`;
//}

//let celciusLink = document.querySelector("#celsius");
//celciusLink.addEventListener("click", convertToCelsius);

//function showFahrenheitTemp(event) {
//event.preventDefault();
//let fahrenheitTemp = document.querySelector("#main-temp");
//fahrenheitTemp.innerHTML = "59º";
//}

//let fahrenheit = document.querySelector("#fahrenheit");
//fahrenheit.addEventListener("click", showFahrenheitTemp);
