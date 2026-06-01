import { Book } from "./book.js";
import {Library} from './library.js'

/* Inicialización */

const myLibrary = new Library('Alberto');

const mainBody = document.querySelector('.main-body');
const aside = document.querySelector('aside');
const main = document.querySelector('main')

myLibrary.addBookToLibrary('The Hobbit', 'J.R.R Tolkien', 310, true);
myLibrary.addBookToLibrary('1984', 'George Orwell', 328, false);
myLibrary.addBookToLibrary("Dune", "Frank Herbert", 412, false);
myLibrary.addBookToLibrary("To Kill a MockingBird", "Harper Lee", 281, true);
myLibrary.addBookToLibrary("The Alchemist", "Paulo Coelho", 208, true)
console.log(myLibrary.books)
renderBooks()

// aside.classList.add('hide');
//main.classList.add('full-width');

/* Mostrar el formulario de entrada de nuevo libro */
document.getElementById('btn-new-book').addEventListener('click', () => {
    aside.classList.remove('hide');
    main.classList.remove('full-width');
})



/* Gestionar la eliminación y el toogle de leido de cada libro */
main.addEventListener('click', event => {
    if (event.target.dataset.action === 'remove') {
        myLibrary.removeBookToLibrary(event.target.dataset.id)
        renderBooks()
    } else if (event.target.dataset.action === 'toggle'){
        myLibrary.toggleRead(event.target.dataset.id)
        renderBooks();
    }
})

function renderBooks() {
    mainBody.innerHTML = ''
    for (let book of myLibrary.books) {
        let { title, author, pages, read, id } = book;
        let readClass = read ? 'read' : 'not-read';
        let readText = read ? 'Readed' : 'Not Readed';
        document.getElementById('book-count').textContent = myLibrary.books.length;
        mainBody.innerHTML += `
            <div class="card" id="${book.id}">
							<div class="header-card">
								<h4>${title}</h4>
								<div class="header-tag">
									<img src="./resources/author.svg" class="icon icon-card" />
									<p>Author: ${author}</p>
								</div>
							</div>
							<div class="header-tag">
								<img src="./resources/book2.svg" class="icon icon-card" />
								<p>Pages: ${pages}</p>
							</div>
							<div class="header-tag">
								<img src="./resources/bookmark.svg" class="icon icon-card" />
								<p>Status: <span class="${readClass}">${readText}</span></p>
							</div>
							<div class="main-btns">
								<button class="btn-card-purple" data-action="toggle" data-id=${id}>
									<img data-action="toggle" data-id=${id} src="./resources/toogle.svg" class="icon icon-card" />
									<p data-action="toggle" data-id=${id}>Toogle Read</p>
								</button>
								<button class="btn-card-red" data-action="remove" data-id=${id}>
									<img data-action="remove" data-id=${id} src="./resources/trash.svg" class="icon icon-card" />
								</button>
							</div>
						</div>
        `
    }
}