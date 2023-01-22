
import {WeatherAPI} from "./weather-api.js";

function testBuildURL(){

  const weatherAPI = new WeatherAPI("Delhi");
  weatherAPI.buildURL();

}


function testInvokeAPI(){

  const weatherAPI = new WeatherAPI("London");
  const response =  weatherAPI.invoke();
  console.log(`Response is ` );
  console.log(response);
}

testBuildURL();

testInvokeAPI();