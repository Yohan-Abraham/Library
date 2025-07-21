const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function displayBooks() {
    const bookContainer = document.querySelector("#books");

    for (const book of myLibrary) {
        const card = document.createElement("div");
        card.id = crypto.randomUUID();
        card.className = "card";

        const title = document.createElement("div");
        title.className = "title";
        title.style.fontSize = "1.2rem";
        title.style.fontWeight = "bold";
        title.textContent = `${book.title}`;
        card.appendChild(title);

        const filler = document.createElement("div");
        filler.textContent = "By";
        card.appendChild(filler);

        const author = document.createElement("div");
        author.className = "author";
        author.textContent = `Author: ${book.author}`;
        card.appendChild(author);

        const pages = document.createElement("div");
        pages.className = "pages";
        pages.textContent = `Pages: ${book.pages}`;
        card.appendChild(pages);

        const read = document.createElement("div");
        read.className = "read";
        read.textContent = `Read: ${book.read}`;
        card.appendChild(read);

        bookContainer.appendChild(card);

    }
}

const addBook = document.querySelector("#button");
const bookInfo = document.querySelector("#book-information");
const output = document.querySelector("output");
const confirmBtn = document.querySelector("#confirmBtn");

addBook.addEventListener("click", () => {
    bookInfo.showModal();
});
