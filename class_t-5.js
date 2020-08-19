"use strict";

// Створити простенький калькулятор за допомогою класу.

// Цей клас буде мати такі методи:

// Метод що запитує в користувача 2 числа
// Метод що додає ці числа
// Метод що віднімає ці числа
// Метод що перемножує ці числа
// Метод що ділить ці числа
// Метод що виводить результат арефметичної операції на екран
// в форматі`Результат операції ${value}`
// цей метод запускаєтьсяв кінці кожного з методів 2 - 5
// Метод що додає в калькулятор новий функціонал(Приймає
// аргументом колбек в якому описаний новий метод)
// Передати в метод №7 колбек ф - ю що підносить числа в
// степінь
// Написати всі методи і перевірити чи вони працюють

class Calk {
  constructor(a = 0, b = 0) {
    this.a = a;
    this.b = b;
  }

  result() {
    return console.log(`Результат операції ${this.c}`);
  }

  ask() {
    this.a = +prompt("Введите первое число");
    this.b = +prompt("Введите воторое число");
  }

  sum() {
    this.c = this.a + this.b;
    return this.c;
  }
  minus() {
    this.c = this.a - this.b;
    return this.c;
  }
  multiply() {
    this.c = this.a * this.b;
    return this.c;
  }
  split() {
    this.c = this.a / this.b;
    return this.c;
  }
  new_func(cb_func) {
    this.c = cb_func(this.a, this.b);
  }
}

function my_pow(a, b) {
  return a ** b;
}

const number = new Calk();

number.ask();

number.sum();
number.result();

number.minus();
number.result();

number.multiply();
number.result();

number.split();
number.result();

number.new_func(my_pow);
number.result();
