

class FoodCategoryView{

  constructor(foodCategory){
    this.foodCategory = foodCategory;
  }  

  constructCategoryUI(){
  
    const listCardElement = document.createElement("div");
    
    listCardElement.setAttribute("class", "list-card");

    console.log("Image Path -> " + this.foodCategory.imagePath);

    const imageElement = document.createElement("img");
    imageElement.setAttribute("src", this.foodCategory.imagePath);

    const anchorElement = document.createElement("a");
    anchorElement.setAttribute("class", "list-name");

    // anchorElement.setAttribute("href", "#" + this.foodCategory.name);
    anchorElement.setAttribute("href", `#${this.foodCategory.name}`);

    anchorElement.innerText = this.foodCategory.name;

    listCardElement.appendChild(imageElement);
    listCardElement.appendChild(anchorElement);

    return listCardElement;
  }

  appendCategoryToCategoryList(categoryElement){

    const categoryListUIElement = document.getElementById("category-list");

    categoryListUIElement.appendChild(categoryElement);
  }
}

export {FoodCategoryView}