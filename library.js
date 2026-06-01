import { Book } from './book.js'

export function Library(name) {
    if (!new.target) throw new Error("Has tratado de instanciar una libreria sin new")
    this.name = name;
    this.books = [];
}

Library.prototype.addBookToLibrary = function(title, author, pages, read){
    let book = new Book(title, author, pages, read);
     this.books.push(book);
 }

Library.prototype.removeBookToLibrary = function (id) {
    const index = this.books.findIndex(book => book.id === id);
    if (index !== -1) {
        this.books.splice(index, 1);
    }
}

Library.prototype.toggleRead = function (id) {
    const index = this.books.findIndex(book => book.id === id);
    if (this.books[index].read) this.books[index].read = false
    else this.books[index].read = true;
}