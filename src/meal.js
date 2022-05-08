const nameMenuItem = item => {
  const menuItem = `Delicious ${item}`;
  return menuItem;
};

const createMenuItem = (itemParam, priceParam, typeParam) => {
  const menuItem = {};
  menuItem.name = itemParam;
  menuItem.price = priceParam;
  menuItem.type = typeParam;

  return menuItem;
};

const addIngredients = (ingredient, ingredientsArray) => {
  if (ingredientsArray.includes(ingredient)) {
    return ingredientsArray;
  } else {
    return ingredientsArray.push(ingredient);
  }
};

const formatPrice = initialPrice => {
  return `$${initialPrice}`;
};

const decreasePrice = decreasedPrice => {
  return decreasedPrice * 0.9;
};

const createRecipe = (titleParam, ingredientsParam, typeParam) => {
  const recipe = {};
  recipe.title = titleParam;
  recipe.ingredients = ingredientsParam;
  recipe.type = typeParam;

  return recipe;
};

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
};
