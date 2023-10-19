  
function formatDate (timestamp) {
 let date = new Date(timestamp);
  
 let hours = date.getHours();
 if (hours < 10){
    hours = `0${hours}`
  }
  let minutes = date.getMinutes();
  if (minutes < 10){
    minutes = `0${minutes}`
  }

  let days = ["Sunday", "Monda", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[date.getDay()];
  return `${day} ${hours} : ${minutes}`;
}

function displayForecast(response){
  console.log(response.data.daily);
   let forecastElement = document.querySelector("#forecast");

   let days = ["Thu","Fri","Sat","Sun"];

let forecastHTML = `<div class = "row">`;
days.forEach(function (day){
   forecastHTML = forecastHTML + ` <div class = "col-2">
                <div class = "weather-forecast-date">
                 ${day}
                 </div>
                 <img src="http://openweathermap.org/img/wn/50d@2x.png"
                 alt=""
                 width="50"
                 />
                 <div class = "weather-forecast-temperature">
                 <span class = "weather-forecast-temperature-max">
                    18° </span>
                 <span class = "weather-forecast-temperature-min">
                 12° </span>
                 </div>
            </div>
        `;
});
        forecastHTML = forecastHTML+`</div>`;
        forecastElement.innerHTML = forecastHTML;
}

function getForecast(coordinates){
  console.log(coordinates);
    apiKey = "96ad27349a64ea1dcdfbe6f4d458c085";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}



  function displayTemperature(response){
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windyElement = document.querySelector("#windy");
    let dateElement = document.querySelector("#date");
    let iconElement = document.querySelector("#icon");

      let celsiusTemperature = response.data.main.temp;
 
  
temperatureElement.innerHTML = Math.round(celsiusTemperature);
cityElement.innerHTML = response.data.name;
descriptionElement.innerHTML = response.data.weather[0].description;
humidityElement.innerHTML = response.data.main.humidity;
windyElement.innerHTML = Math.round(response.data.wind.speed);
dateElement.innerHTML = formatDate(response.data.dt * 1000);
iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
 iconElement.setAttribute("alt", response.data.weather[0].description);

getForecast(response.data.coord);

}


 function search(city){
  apiKey = "96ad27349a64ea1dcdfbe6f4d458c085";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);

 }

 function handleSubmit(event){
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}

function displayFahrenheitTemperature(event){
    event.preventDefault();
        let temperatureElement = document.querySelector("#temperature");
        
        celiusLink.classList.remove("active");
        fahrenheitLink.classList.add("active");
    let FahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
    temperatureElement.innerHTML =  Math.round(FahrenheitTemperature);
  }

   function displayCeliusTemperature(event){
    event.preventDefault();
    celiusLink.classList.add("active");
    fahrenheitLink.classList.remove("active");
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(celsiusTemperature);
 }

let celsiusTemperature = null;

let form =document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celiusLink = document.querySelector("#celius-link");
celiusLink.addEventListener("click", displayCeliusTemperature);

search("Durban");

