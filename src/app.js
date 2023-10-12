  
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



  function displayTemperature(response){
  console.log (response.data.main.temp);
  
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
 
  let cityElement = document.querySelector("#city");
cityElement.innerHTML = response.data.name;

let descriptionElement = document.querySelector("#description");
descriptionElement.innerHTML = response.data.weather[0].description;

let humidityElement = document.querySelector("#humidity");
humidityElement.innerHTML = response.data.main.humidity;
  
let windyElement = document.querySelector("#windy");
windyElement.innerHTML = Math.round(response.data.wind.speed);

let dateElement = document.querySelector("#date");
dateElement.innerHTML = formatDate(response.data.dt * 1000);

let iconElement = document.querySelector("#icon");
iconElement.setAttribute ("src",`https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`);
iconElement.setAttribute("alt", response.data.weather[0].description);

}

  
  
  
  apiKey = "96ad27349a64ea1dcdfbe6f4d458c085";
  let city = "Durban"
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);