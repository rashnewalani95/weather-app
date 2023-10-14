  
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
  celsiusTemperature = response.data.main.temp;
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
 

celsiusTemperature = response.data.main.temp;


  let cityElement = document.querySelector("#city");
cityElement.innerHTML = response.data.name;

descriptionElement.innerHTML = response.data.weather[0].description;

let humidityElement = document.querySelector("#humidity");
humidityElement.innerHTML = response.data.main.humidity;
  
let windyElement = document.querySelector("#windy");
windyElement.innerHTML = Math.round(response.data.wind.speed);

let dateElement = document.querySelector("#date");
dateElement.innerHTML = formatDate(response.data.dt * 1000);

let iconElement = document.querySelector("#icon");
iconElement.setAttribute ("src",`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
iconElement.setAttribute("alt", response.data.weather[0].description);

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

let celsiusTemperature = null;


  let form =document.querySelector("#search-form");
  form.addEventListener("submit", handleSubmit);



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



  let fahrenheitLink = document.querySelector("#fahrenheit-link");
  fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

  let celiusLink = document.querySelector("#celius-link");
  celiusLink.addEventListener("click", displayCeliusTemperature);






  search("Durban");
