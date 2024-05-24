const form = document.getElementById('add-form');

const myLibrary = [];

form.addEventListener('submit', (event)=> {
    event.preventDefault();
    addBookToLibrary()
    form.reset()
})

function Book(title, author, pages) {
  // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary() {
  // do stuff here
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    
    const addedBook = new Book(title, author, pages);
    myLibrary.push(addedBook);
    console.log(myLibrary)
}

function displayBooks() {
    
}
