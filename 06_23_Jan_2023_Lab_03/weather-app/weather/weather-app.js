
import {WeatherAPI} from "./weather-api.js";

class WeatherApp{


  init(){

    this.addEventHandlers();
  }

  addEventHandlers(){

    const searchBoxElement = document.querySelector(".search-box");

    searchBoxElement.param1 = this;    
    searchBoxElement.addEventListener("keypress", this.handleEvent);
  }
  
  handleEvent(event){

    // Only when enter key is pressed

    if (event.key == "Enter" || event.keyCode == 13){

      const eventTarget = event.target;
      const cityName = eventTarget.value;

      const theWeatherAppObj = eventTarget.param1

      const weatherAPI = new WeatherAPI(cityName);

      weatherAPI.invoke().then( (response) => {

        theWeatherAppObj.updateUIElements(response);
      })
    }

  }

  updateUIElements(weatherJSON){

    const cityElement = document.querySelector(".location .city")
    cityElement.innerHTML = `${weatherJSON.name}, ${weatherJSON.sys.country}`;

    const dateElement = document.querySelector(".location .date")
    const now = new Date();
    const dateAsString = now.toLocaleDateString("en-US", {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })

    console.log("Date as String " + dateAsString);
    dateElement.innerHTML = `${dateAsString}`;

    const temperatureElement = document.querySelector(".current .temp")
    temperatureElement.innerHTML = `${weatherJSON.main.temp} °c`;

    const weatherElement = document.querySelector(".current .weather");
    const weatherValue = weatherJSON.weather[0].main;
    weatherElement.innerText = weatherValue;
    
    const highLowElement = document.querySelector(".current .hi-low")
    highLowElement.innerHTML = `${weatherJSON.main.temp_max}°c / ${weatherJSON.main.temp_min}°c`;
    
  }
}

export {WeatherApp}