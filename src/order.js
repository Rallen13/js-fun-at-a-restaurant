function takeOrder (orderParam, deliveryOrdersArrayParam) {
  if (deliveryOrdersArrayParam.length < 3) {
    return deliveryOrdersArrayParam.push(orderParam)
  } else {
    return deliveryOrdersArrayParam
  }
}

function refundOrder (refundOrderNumberParam, deliveryOrdersArrayParam) {
  for (var i = 0; i < deliveryOrdersArrayParam.length; i++) {
    if (deliveryOrdersArrayParam[i].orderNumber === refundOrderNumberParam) {
      deliveryOrdersArrayParam.splice(i, 1)
    } else {
      deliveryOrdersArrayParam
    }
  }
  return
}

function listItems (deliveryOrdersArrayParam) {
  var listOfItems = []
  for (var i = 0; i <deliveryOrdersArrayParam.length; i++) {
    listOfItems.push(deliveryOrdersArrayParam[i].item)
  }
  return listOfItems.join(", ")
}

function searchOrder (deliveryOrdersArrayParam, itemNameParam) {
  var isInOrder = false
  for (var i = 0; i < deliveryOrdersArrayParam.length; i++) {
    if (deliveryOrdersArrayParam[i].item === itemNameParam) {
      isInOrder = true
    }  
  }
  return isInOrder
}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
