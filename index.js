const myLibrary = [];

function Book(title, author, pages, read) {
    if (!new.target) throw new Error("Has tratado de instanciar un libro sin new");
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
    book = new Book(title, author, pages, read);
    myLibrary.push(book)
}

function showBooks() {
    let bookToAdd = null;
    const booksContainer = document.querySelector('#container-books')
    for (let book of myLibrary){
        bookToAdd = document.createElement('p')
        bookToAdd.textContent = book.info()
        booksContainer.appendChild(bookToAdd)

    }
}

addBookToLibrary('TLOR', 'Tolkien', 123, true)
showBooks()

// aside.classList.add('hide');
//main.classList.add('full-width');