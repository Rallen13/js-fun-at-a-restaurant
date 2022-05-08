const takeOrder = (orderParam, deliveryOrdersArrayParam) => {
  if (deliveryOrdersArrayParam.length < 3) {
    return deliveryOrdersArrayParam.push(orderParam);
  } else {
    return deliveryOrdersArrayParam;
  }
};

const refundOrder = (refundOrderNumberParam, deliveryOrdersArrayParam) => {
  deliveryOrdersArrayParam.forEach((deliveryOrder, i) => {
    if (deliveryOrder.orderNumber === refundOrderNumberParam) {
      deliveryOrdersArrayParam.splice(i, 1);
    } else {
      deliveryOrdersArrayParam;
    }
  });
  return;
};

const listItems = deliveryOrdersArrayParam => {
  const listOfItems = [];
  deliveryOrdersArrayParam.forEach(deliveryOrder => {
    listOfItems.push(deliveryOrder.item);
  });
  return listOfItems.join(", ");
};

const searchOrder = (deliveryOrdersArrayParam, itemNameParam) => {
  let isInOrder = false;
  for (var i = 0; i < deliveryOrdersArrayParam.length; i++) {
    if (deliveryOrdersArrayParam[i].item === itemNameParam) {
      isInOrder = true;
    }
  }
  return isInOrder;
};

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
};
