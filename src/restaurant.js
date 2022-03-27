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



module.exports = {
   createRestaurant,
  // addMenuItem,
  // removeMenuItem
}
