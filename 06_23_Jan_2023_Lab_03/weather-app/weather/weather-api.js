
const API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "08a3b90e6888abe49c49b671e358abc1";

class WeatherAPI{

  constructor(cityName){

    this.cityName = cityName;
    this.apiUrl = new URL(API_BASE_URL);    
  }

  buildURL(){

    this.apiUrl.searchParams.append("q", this.cityName);
    this.apiUrl.searchParams.append("appid", API_KEY);
    this.apiUrl.searchParams.append("units", "metric");

    console.log(`URL is ${this.apiUrl}`);
  }

}

export {WeatherAPI}