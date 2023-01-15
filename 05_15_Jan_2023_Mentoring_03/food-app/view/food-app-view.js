
import {FoodCategoryFactory} from "../../food-category/model/food-category-factory.js";
import {FoodCategoryView} from "../../food-category/view/food-category-view.js";
import {FoodItemUtils} from "../../food-item/model/FoodItemUtils.js";
import {FoodItemView} from "../../food-item/view/FoodItemView.js";

class FoodAppView{

  initialize(){

    // Food Items Display -- Main UI
    this.displayFoodItemsUI();

    // Category List - 

    this.displayCategoryListUI();
  }

  displayFoodItemsUI(){

    const foodCategories = FoodCategoryFactory.getCategories();
    foodCategories.forEach((foodCategory) => {

      const foodItems = FoodItemUtils.getAllItems(foodCategory);

      foodItems.forEach((foodItem) => {

          const foodItemView = new FoodItemView(foodItem);

          const foodItemUIElement = foodItemView.constructFoodItemUI();

          foodItemView.appendFoodItemToFoodCategory(foodCategory, foodItemUIElement);
      })
    })
  }

  displayCategoryListUI(){

    const foodCategories = FoodCategoryFactory.getCategories();

    foodCategories.forEach( (foodCategory) => {

      const foodCategoryView = new FoodCategoryView(foodCategory);
      const categoryElement =  foodCategoryView.constructCategoryUI();

      foodCategoryView.appendCategoryToCategoryList(categoryElement);
    });

  }

}

export {FoodAppView}