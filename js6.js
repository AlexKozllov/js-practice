"use strict";

const arrNumber = [1, 4, 3, 14, 16, 2, 90];
for (let i = 0; i < arrNumber.length; i++) {
  console.log("for", arrNumber[i]);
}

/////////     forEach      /////////  перебирает массив и ничего не вернет
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

//////////        mep        //////////  Перебирает массив и записать в новый
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

const sumNums = [1, 20, 31, 4, 500];
const isBig = (val) => val >= 10;
/////////     every     ////////   вернет true когда все элементы удовлетворяют условие

console.log(sumNums.every(isBig));
/////////     some     ////////   вернет true когда хотябы один удовлетворяют условие

console.log(sumNums.some(isBig));

////////     reduce     /////////    перебрать все элементы массива
/////////////////////////////////    (иммеет аккумулятор acc и итерируемый элемент el)
console.log("initial array", sumNums);
const newSum = sumNums.reduce((acc, el) => acc + el, 1000);
console.log("reduce acc", newSum);

/////////     My example    ////////////

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];
const likes = tweets.reduce((totalLike, tweet) => totalLike + tweet.likes, 0);
console.log(likes);
////
const getTags = (array) =>
  array.reduce((acc, elem) => {
    acc.push(...elem.tags);
    return acc;
  }, []);

const tags = getTags(tweets);
console.log("Все теги объектов", tags);

const getTagStats = (acc, tag) => {
  if (!acc.hasOwnProperty(tag)) {
    acc[tag] = 0;
  }
  acc[tag] += 1;
  return acc;
};

const countTags = (arr) => arr.reduce(getTagStats, {});
const tagCount = countTags(tags);
console.log(tagCount);

///////    sort    ///////

const alpha = [1, 23, 35, 7, 4, 8, 2, 6];
console.log("after sort", alpha.sort());
console.log(
  "after sort",
  alpha.sort((a, b) => 4 - 20)
);
console.log(
  "after sort",
  alpha.sort((a, b) => b - a)
);

//////

const client = ["Jane", "Jaxk", "Cecile", "Arlo", "Susan"];
console.log("beafore sort", client);
console.log("after sort", client.sort());

console.log(
  ////    Можно это не делать, само справится
  "after My sort",
  client.sort((a, z) => z - a)
);
console.log("after My sort", client.sort().reverse());
