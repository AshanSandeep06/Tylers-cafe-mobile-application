import { MEALS } from "../data/dummy-data";

class Meal {
    constructor(
      id,
      categoryIds,
      title,
      affordability,
      complexity,
      imageUrl,
      duration,
      ingredients,
      steps,
      isGlutenFree,
      isVegan,
      isVegetarian,
      isLactoseFree,
      quantity,
      price,
      categories
    ) {
      this.id = id;
      this.categoryIds = categoryIds;
      this.title = title;
      this.imageUrl = imageUrl;
      this.ingredients = ingredients;
      this.steps = steps;
      this.duration = duration;
      this.complexity = complexity;
      this.affordability = affordability;
      this.isGlutenFree = isGlutenFree;
      this.isVegan = isVegan;
      this.isVegetarian = isVegetarian;
      this.isLactoseFree = isLactoseFree;
      this.quantity = quantity;
      this.price = price;
      this.categories = categories;
    }
  }
  
  export default Meal;