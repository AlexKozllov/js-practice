"use strict";

// 1. Написати ф-ю яка приймає в себе 2 параметра (обєкт
// замовлення і обєкт
// з цінами товару) Ця ф-я має повернути ціну замовлення

const productsPrice = {
  apple: 20,
  orange: 5,
  cheese: 12,
  pork: 45,
  bread: 23,
};
const orderA = {
  apple: 5,
  cheese: 1,
  bread: 3,
};
const orderB = {
  orange: 10,
  pork: 2,
  bread: 1,
};

const priseOfOrder = function (objOrder, objWithPrice) {
  //   console.log(objOrder);
  //   console.log(objWithPrice);
  const keysOfOrders = Object.keys(objOrder);
  const keysOfPrices = Object.keys(objWithPrice);
  console.log(keysOfOrders);
  console.log(keysOfPrices);
  let sum = 0;
  for (let i = 0; i < keysOfPrices.length; i++) {
    let product = keysOfOrders[i];
    let count = objOrder[product];
    let price = objWithPrice[product];
    console.log(count);
    if (keysOfPrices.includes(product)) {
      sum += count * price;
    }
  }
  return console.log(sum);
};

priseOfOrder(orderA, productsPrice);
// priseOfOrder(orderB, productsPrice);
