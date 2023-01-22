
import {WeatherAPI} from "./weather-api.js";

function testBuildURL(){

  const weatherAPI = new WeatherAPI("Delhi");
  weatherAPI.buildURL();

}

testBuildURL();