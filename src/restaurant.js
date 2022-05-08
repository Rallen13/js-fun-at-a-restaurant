const createRestaurant = nameParam => {
  var restaurant = {
    name: nameParam,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  };
  return restaurant;
};

const addMenuItem = (restaurantParam, menuItemParam) => {
  if (menuItemParam.type === "breakfast") {
    if (restaurantParam.menus.breakfast.includes(menuItemParam)) {
      return restaurantParam;
    } else {
      restaurantParam.menus.breakfast.push(menuItemParam);
    }
  } else if (menuItemParam.type === "lunch") {
    if (restaurantParam.menus.lunch.includes(menuItemParam)) {
      return restaurantParam;
    } else {
      restaurantParam.menus.lunch.push(menuItemParam);
    }
  } else if (menuItemParam.type === "dinner") {
    if (restaurantParam.menus.dinner.includes(menuItemParam)) {
      return restaurantParam;
    } else {
      restaurantParam.menus.dinner.push(menuItemParam);
    }
  }
  return restaurantParam;
};

const removeMenuItem = (restaurantParam, menuItemParam, menuTypeParam) => {
  let message = `Sorry, we don't sell ${menuItemParam}, try adding a new recipe!`;
  const removedItemMessage = `No one is eating our ${menuItemParam} - it has been removed from the ${menuTypeParam} menu!`;

  if (menuTypeParam === "breakfast") {
    restaurantParam.menus.breakfast.forEach((breakfastItem, i) => {
      if (breakfastItem.name === menuItemParam) {
        restaurantParam.menus.breakfast.splice(i, 1);
        return (message = removedItemMessage);
      }
    });
  } else if (menuTypeParam === "lunch") {
    restaurantParam.menus.lunch.forEach((lunchItem, i) => {
      if (lunchItem.name === menuItemParam) {
        restaurantParam.menus.lunch.splice(i, 1);
        return (message = removedItemMessage);
      }
    });
  } else if (menuTypeParam === "dinner") {
    restaurantParam.menus.dinner.forEach((dinnerItem, i) => {
      if (dinnerItem.name === menuItemParam) {
        restaurantParam.menus.dinner.splice(i, 1);
        return (message = removedItemMessage);
      }
    });
  }

  return message;
};
module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
};
