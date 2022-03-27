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

module.exports = {
  createRestaurant,
  addMenuItem,
  // removeMenuItem
}
