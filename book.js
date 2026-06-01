export function Book(title, author, pages, read) {
    if (!new.target) throw new Error("Has tratado de instanciar un libro sin new");
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

export function addBookToLibrary(library,title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    library.push(book)
}

// export function showBooks(library) {
//     let bookToAdd = null;
//     const booksContainer = document.querySelector('#container-books')
//     for (let book of myLibrary){
//         bookToAdd = document.createElement('p')
//         bookToAdd.textContent = book.info()
//         booksContainer.appendChild(bookToAdd)

//     }
// }