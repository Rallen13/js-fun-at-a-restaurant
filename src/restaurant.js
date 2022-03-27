function createRestaurant(nameParam) {
  var restaurant = {
    name: nameParam,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    }
  };
  return restaurant
}

function addMenuItem(restaurantParam, menuItemParam) {
  if (menuItemParam.type === "breakfast") {
    if (restaurantParam.menus.breakfast.includes(menuItemParam)) {
      return restaurantParam
    } else {
      restaurantParam.menus.breakfast.push(menuItemParam)
    }
  } else if (menuItemParam.type === "lunch") {
    if (restaurantParam.menus.lunch.includes(menuItemParam)) {
      return restaurantParam
    } else {
      restaurantParam.menus.lunch.push(menuItemParam)
    }
  } else if (menuItemParam.type === "dinner") {
    if (restaurantParam.menus.dinner.includes(menuItemParam)) {
      return restaurantParam
    } else {
      restaurantParam.menus.dinner.push(menuItemParam)
    }
  }
  return restaurantParam
}

function removeMenuItem(restaurantParam, menuItemParam, menuTypeParam) {
  var removedItemMessage = `No one is eating our ${menuItemParam} - it has been removed from the ${menuTypeParam} menu!`

  var errorMessage = `Sorry, we don't sell ${menuItemParam}, try adding a new recipe!`

  if (menuTypeParam === "breakfast") {
    for (var i = 0; i < restaurantParam.menus.breakfast.length; i++) {
      if (restaurantParam.menus.breakfast[i].name === menuItemParam) {
        restaurantParam.menus.breakfast.splice(i, 1)
        return removedItemMessage
      }
    }
  } else if (menuTypeParam === "lunch") {
    for (var i = 0; i < restaurantParam.menus.lunch.length; i++) {
      if (restaurantParam.menus.lunch[i].name === menuItemParam) {
        restaurantParam.menus.lunch.splice(i, 1)
        return removedItemMessage
      }
    }
  } else if (menuTypeParam === "dinner") {
    for (var i = 0; i < restaurantParam.menus.dinner.length; i++) {
      if (restaurantParam.menus.dinner[i].name === menuItemParam) {
        restaurantParam.menus.dinner.splice(i, 1)
        return removedItemMessage
      }
    }
  }
  return errorMessage
}
module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
