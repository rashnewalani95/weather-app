  
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
}
  
  
  
  apiKey = "96ad27349a64ea1dcdfbe6f4d458c085";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Durban&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);