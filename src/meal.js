function nameMenuItem(item) {
  var menuItem = `Delicious ${item}`
  return menuItem
}

function createMenuItem(itemParam, priceParam, typeParam) {
  var menuItem = {};
  menuItem.name = itemParam;
  menuItem.price = priceParam;
  menuItem.type = typeParam;

  return menuItem
};

function addIngredients(ingredient, ingredientsArray) {
    if (ingredientsArray.includes(ingredient)) {
      return ingredientsArray
    } else {
      return ingredientsArray.push(ingredient)
    }
}

function formatPrice(initialPrice) {
  return `$${initialPrice}`
}

function decreasePrice(decreasedPrice) {
  return decreasedPrice * .90
}

function createRecipe(titleParam, ingredientsParam, typeParam) {
  var recipe = {};
  recipe.title = titleParam
  recipe.ingredients = ingredientsParam
  recipe.type = typeParam

  return recipe
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
