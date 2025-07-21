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
        title.textContent = `Title: ${book.title}`;
        card.appendChild(title);

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


addBookToLibrary("The prince", "Machivelli", 200, false);
displayBooks();

addBook.addEventListener("click", () => {

}); 