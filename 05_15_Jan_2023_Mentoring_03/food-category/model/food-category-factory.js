
import {FoodCategory} from "./food-category.js";
import {FoodItemUtils} from "../../food-item/model/FoodItemUtils.js";

const BIRYANI = new FoodCategory("biryani", 
FoodItemUtils.getFoodItemFrom(1).imagePath);
const CHICKEN = new FoodCategory("chicken", FoodItemUtils.getFoodItemFrom(10).imagePath);
const PANEER = new FoodCategory("paneer", FoodItemUtils.getFoodItemFrom(16).imagePath);
const VEGETABLE = new FoodCategory("vegetable", FoodItemUtils.getFoodItemFrom(23).imagePath);
const CHINESE = new FoodCategory("chinese", FoodItemUtils.getFoodItemFrom(30).imagePath);
const SOUTH_INDIAN = new FoodCategory("south indian", FoodItemUtils.getFoodItemFrom(37).imagePath);


class FoodCategoryFactory {

  
  static getCategories(){

    const foodCategories = new Array();

    foodCategories.push(BIRYANI);
    foodCategories.push(CHICKEN);
    foodCategories.push(PANEER);
    foodCategories.push(VEGETABLE);
    foodCategories.push(CHINESE);
    // foodCategories.push(SOUTH_INDIAN);

    return foodCategories;
  }  

}

export {FoodCategoryFactory}