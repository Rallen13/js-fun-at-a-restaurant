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

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  // createRecipe
}
