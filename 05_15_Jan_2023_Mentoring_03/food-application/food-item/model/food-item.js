
class FoodItem {

  constructor(id, name, category, rating, price, 
    imagePath, quantity, selected){

      this.id = id;
      this.name = name;

      //TODO - String or Category object
      this.category = category;
      this.rating = rating;
      this.price = price;
      this.imagePath = imagePath;
      this.quantity = quantity;
      this.selected = selected;
    }
  
}

export {FoodItem}