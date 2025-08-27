const myLibrary = [];


class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function addBookToLibrary(title, author, pages, read) {
    newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}



function displayBooks() {
    const bookContainer = document.querySelector("#books");
    bookContainer.textContent = "";
    counter = 0;
    for (const book of myLibrary) {
        const card = document.createElement("div");
        card.dataset.id = counter;
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
        author.textContent = `${book.author}`;
        card.appendChild(author);

        const pages = document.createElement("div");
        pages.className = "pages";
        pages.textContent = `Pages: ${book.pages}`;
        card.appendChild(pages);

        const read = document.createElement("div");
        read.className = "read";
        read.textContent = `Read: ${book.read}`;
        card.appendChild(read);

        const remove = document.createElement("button");
        remove.classList = "remove";
        remove.textContent = "Remove";
        remove.addEventListener("click", () => {
            //remove book here
            myLibrary.splice(card.dataset.id, 1);
            displayBooks();
        });
        card.appendChild(remove);

        const toggleRead = document.createElement("button");
        toggleRead.className = "toggle-read";
        toggleRead.textContent = "Read";
        toggleRead.addEventListener("click", () => {
            book.read = book.read === "Yes" ? "No" : "Yes";
            read.textContent = `Read: ${book.read}`;
        });
        card.appendChild(toggleRead);

        bookContainer.appendChild(card);
        counter++;

    }
}

const addBook = document.querySelector("#button");
const bookInfo = document.querySelector("#book-information");
const confirmBtn = document.querySelector("#confirmBtn");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");

addBook.addEventListener("click", () => {
    bookInfo.showModal();
});

confirmBtn.addEventListener("click", (event) => {

    addBookToLibrary(title.value, author.value, pages.value, read.value);
    event.preventDefault();
    displayBooks();
    bookInfo.close();
});




