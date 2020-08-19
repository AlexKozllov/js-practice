"use strict";

const arrNumber = [1, 4, 3, 14, 16, 2, 90];
for (let i = 0; i < arrNumber.length; i++) {
  console.log("for", arrNumber[i]);
}

/////////     forEach      /////////  переберет массив и ничего не вернет
////////////////////////////////////  (может изменить только исходник)
let total = 0;
const a = [];
arrNumber.forEach((el) => {
  console.log("forEach", el);
  a.push(el + 1);
  total += 1;
});
console.log(a);
console.log(total);

const tests = ["test-1", "test-2", "test-3", "test-4", "test-5", "test-6"];

tests.forEach((el) => console.log(el));

//////////        mep        //////////  Переберет массив и запишет в новий
///////////////////////////////////////  (не трогает исходник)

const coubleNumbers = arrNumber.map((num) => num * 2);
console.log("map", arrNumber);
console.log("исходный массив", coubleNumbers);
/////////     My example    ////////////
const users = [
  { name: "jack", isActive: true },
  { name: "john", isActive: false },
  { name: "Susan", isActive: true },
];

const userArr = users.map((user) => user.name);
console.log("map", userArr);

///////     filter ////////  Возвращает массив значений удовлетворяющих условию

const filteredArray = arrNumber.filter((el) => el > 10);
console.log("filter-1", filteredArray);

/////////     My example    ////////////
const even = arrNumber.filter((el) => el % 2 === 0);
console.log(even);

///////////    find ////////  возвращает первого совпадения, а filter
// /////////////////////////  вернет все, что удовлетворяют условие
const newArr = [1, 2, 3, 2, 1];
const nextTothree = newArr.find((el) => el >= 3);
console.log(nextTothree);

/////////     My example    ////////////
const newUsers = [
  { id: "01", name: "Mango", isActive: true },
  { id: "01", name: "Poly", isActive: false },
  { id: "002", name: "Ajax", isActive: true },
  { id: "003", name: "Chelsey", isActive: false },
];
const userId002 = newUsers.find((user) => user.id === "002");
console.log(userId002);

///////    функция поиска User по id     /////////
const getUserById = (array, id_value) => array.find((el) => el.id === id_value);
console.log(getUserById(newUsers, "003"));
console.log(getUserById(newUsers, "01"));
console.log(getUserById(newUsers, "000"));
