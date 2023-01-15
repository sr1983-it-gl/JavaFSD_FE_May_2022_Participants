
class FoodItemView{

  constructor(foodItem){

    this.foodItem = foodItem;
  }

  constructFoodItemUI(){

    const itemCardElement = document.createElement("div");

    itemCardElement.setAttribute("id", "item-card");

    const cardTopElement = document.createElement("div");

    const starElement = document.createElement("i");
    starElement.setAttribute("class", "fa fa-star");
    starElement.setAttribute("id", "rating");
    starElement.innerText = this.foodItem.rating;

    cardTopElement.appendChild(starElement);

    const heartElement = document.createElement("i");
    heartElement.setAttribute("class", "fa fa-heart-o add-to-cart");
    heartElement.setAttribute("id", this.foodItem.id);

    cardTopElement.appendChild(starElement);
    cardTopElement.appendChild(heartElement);

    const imageElement = document.createElement("img");
    imageElement.setAttribute("src", this.foodItem.imagePath);

    const itemNameElement = document.createElement("p");
    itemNameElement.setAttribute("id", "item-name");
    itemNameElement.innerText = this.foodItem.name;

    const itemPriceElement = document.createElement("p");
    itemPriceElement.setAttribute("id", "item-price");
    itemPriceElement.innerText = `Price : $ ${this.foodItem.price}`;

    itemCardElement.appendChild(cardTopElement);
    itemCardElement.appendChild(imageElement);
    itemCardElement.appendChild(itemNameElement);
    itemCardElement.appendChild(itemPriceElement);

    return itemCardElement;
  }

  appendFoodItemToFoodCategory(foodCategory, foodItemUIElement){

    console.log(foodCategory.name);
    const foodCategoryUIElement = document.getElementById(foodCategory.name);

    foodCategoryUIElement.appendChild(foodItemUIElement);
  }
}

export {FoodItemView}