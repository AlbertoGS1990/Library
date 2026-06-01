import { Book, addBookToLibrary} from "./book.js";

/* Inicialización */

const myLibrary = [];
const mainBody = document.querySelector('.main-body');
const aside = document.querySelector('aside');
const main = document.querySelector('main')

let book1 = new Book('The Hobbit', 'J.R.R Tolkien', 310, true);
let book2 = new Book('1984', 'George Orwell', 328, false);
let book3 = new Book("Dune", "Frank Herbert", 412, false)
let book4 = new Book("To Kill a MockingBird", "Harper Lee", 281, true)
let book5 = new Book("The Alchemist", "Paulo Coelho", 208, true)
myLibrary.push(book1, book2, book3, book4, book5)

renderBooks(myLibrary)

// aside.classList.add('hide');
//main.classList.add('full-width');

/* Mostrar el formulario de entrada de nuevo libro */
document.getElementById('btn-new-book').addEventListener('click', e => {
    aside.classList.remove('hide');
    main.classList.remove('full-width');
        
})



function renderBooks(library) {
    for (let book of library) {
        let { title, author, pages, read } = book;
        let readClass = read ? 'read' : 'not-read';
        let readText = read ? 'Readed' : 'Not Readed';
        document.getElementById('book-count').textContent = myLibrary.length;
        mainBody.innerHTML += `
            <div class="card">
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
								<button class="btn-card-purple">
									<img src="./resources/toogle.svg" class="icon icon-card" />
									<p>Toogle Read</p>
								</button>
								<button class="btn-card-red">
									<img src="./resources/trash.svg" class="icon icon-card" />
								</button>
							</div>
						</div>
        `

    }
}