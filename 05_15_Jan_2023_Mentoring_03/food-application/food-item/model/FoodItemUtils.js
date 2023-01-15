
import {foodItemsData} from "../food-items-data.js"
import {FoodItem} from "./food-item.js"; 

class FoodItemUtils{


  static getAllItems(foodCategory){

    let foodItemsArray = new Array();

    foodItemsData.forEach((foodItem) => {

      if (foodItem.category === foodCategory.name){

        let foodItemObj = FoodItemUtils.convertToFoodItemObj(foodItem);
        foodItemsArray.push(foodItemObj);
      }
    })    

    return foodItemsArray;
  }

  static getFoodItemFrom(foodItemId) {

    const foodItem = foodItemsData.find( (foodItem) => 

      foodItem.id === foodItemId
    )

    let foodItemObj = FoodItemUtils.convertToFoodItemObj(foodItem);
    return foodItemObj;
  } 

  static convertToFoodItemObj(foodItem){

    let foodItemObj = new FoodItem();

    foodItemObj.id = foodItem.id;
    foodItemObj.name = foodItem.name;

    //TODO - String or Category object
    foodItemObj.category = foodItem.category;

    foodItemObj.rating = foodItem.rating;
    foodItemObj.price = foodItem.price;

    foodItemObj.imagePath = "food-item/" + foodItem.img;

    foodItemObj.quantity = foodItem.quantity;
    foodItemObj.selected = false;

    return foodItemObj;    
  }
}

export {FoodItemUtils}