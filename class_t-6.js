"use strict";

class Library {
  constructor(bookList) {
    this.bookList = bookList;
    this._favouriteBooks = [];
    this._finishedBook = [];
  }
  buy(newBook) {
    if (this.bookList.indexOf(newBook) === -1) {
      this.bookList.push(newBook);
      console.log(`Книга новая`);
    } else {
      console.log(`Книга уже куплена`);
    }
  }
  sell(removeBook) {
    if (this.bookList.indexOf(removeBook) !== -1) {
      this.bookList.splice(this.bookList.indexOf(removeBook), 1);
      console.log(`Книгга удалена из библиотеки`);
    }
  }
  addToFavourite(favouriteBook) {
    if (this.bookList.indexOf(favouriteBook) !== -1) {
      this._favouriteBooks.push(favouriteBook);
      console.log(`Книга добавлена в любимые`);
      console.log(this._favouriteBooks);
    }
  }
  removeFromFavourite(removeFromFavouriteBook) {
    if (this._favouriteBooks.indexOf(removeFromFavouriteBook) !== -1) {
      this._favouriteBooks.splice(
        this._favouriteBooks.indexOf(removeFromFavouriteBook),
        1
      );

      console.log(`Книга удалена из списка любимых`);
    }
  }
  get сountFavouriteBooks() {
    console.log(
      `Количество книг добавленных в список любимых: ${this._favouriteBooks.length}`
    );
  }
  get finishedBook() {
    console.log(`Список всех прочитаных книг: ${this._finishedBook}`);
  }
  totalCost() {}
}

class Book extends Library {
  constructor(author, title, prise, totalPages, currentPages) {
    this.author = author;
    this.title = title;
    this.prise = prise;
    this.totalPages = totalPages;
    this.currentPages = currentPages;
    super();
  }
  read(finishedPages) {
    this.currentPages = finishedPages;
    console.log(`Прочитано ${this.finishedPages} страниц`);
  }
}

//////////////////
const myLibrary = new Library([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);

myLibrary.buy("JS");
myLibrary.buy("JS");

myLibrary.sell("Нанитоиды");

myLibrary.addToFavourite("Пролонгер");

myLibrary.addToFavourite("JS");
myLibrary.removeFromFavourite("C++");
myLibrary.сountFavouriteBooks;
myLibrary.finishedBook;
// console.log(myLibrary.buy("JS"));

/////////////////////////////////////
myLibrary.read(20);
