const apiKey = "a827dfb815dc0b258f37a65e962c851e";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherImg = document.querySelector(".wheather-img");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".wheather").style.display = "none";
  } else {
    var data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".Temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    console.log(data);

    if (data.weather[0].main == "Clouds") {
      weatherImg.src = "assets/cloudy.png";
    } else if (data.weather[0].main == "Clear") {
      weatherImg.src = "assets/clear-sky.png";
    } else if (data.weather[0].main == "Snow") {
      weatherImg.src = "assets/snowy.png";
    } else if (data.weather[0].main == "Rain") {
      weatherImg.src = "assets/heavy-rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherImg.src = "assets/drizzle.png";
    } else if (data.weather[0].main == "Tornado") {
      weatherImg.src = "assets/storm.png";
    } else if (data.weather[0].main == "Smoke") {
      weatherImg.src = "assets/forecast.png";
    }

    document.querySelector(".wheather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
