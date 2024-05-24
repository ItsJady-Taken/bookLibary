const form = document.getElementById('add-form');
const library = document.querySelector('#book-container');

const myLibrary = [];

form.addEventListener('submit', (event)=> {
    event.preventDefault();
    addBookToLibrary()
    form.reset()  
    displayBooks()
})

function Book(image, title, author, pages, read) {
    // the constructor...
    this.image = image;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    // do stuff here
    const image = document.getElementById('image').value;
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('checkbox').checked;

    const addedBook = new Book(image, title, author, pages, read);
    myLibrary.push(addedBook);
    console.log(myLibrary)
  
}

function displayBooks() {
    library.innerHTML = '';
    myLibrary.forEach((book)=> {
        const div = document.createElement('div');
        div.className = 'card';
        div.style.width = '18rem';

        div.innerHTML = 
        `
        <img src="${book.image}" class="card-img-top" alt="#">
        <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
          <p class="card-text"><strong>Author:</strong> ${book.author}</p>
          <p class="card-text"><strong>Pages:</strong> ${book.pages}</p>
          <p class="card-text">${book.read}</p>
          <a href="#" class="btn btn-primary">Remove</a>
        </div>
        `
        library.appendChild(div);
    })
}
