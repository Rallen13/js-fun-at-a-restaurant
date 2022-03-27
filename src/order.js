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


module.exports = {
  takeOrder,
  refundOrder,
  // listItems,
  // searchOrder
}
