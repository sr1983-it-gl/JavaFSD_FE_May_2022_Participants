
import {read, readFile} from "fs";

function handler(error, data){

    if (error){
      console.log("Error " + error);
    }else{
  
      const jsonAsString = data;
  
      const jsObject = JSON.parse(data);
  
      console.log(jsObject.name);
      console.log(jsObject.id);
    }
}
readFile("sample.json", "utf-8", handler);
