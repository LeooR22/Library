const formulario = document.querySelector("#formulario");
const renderBook = document.querySelector("#renderBook");
const templateBook = document.querySelector("#templateBook").content;
const alert = document.querySelector(".alert-danger");
let books = [
  {
    title: "The Little Prince",
    author: "Antoine de Saint-Exupery",
    pages: "96",
    status: "read",
    bookID: "123",
  },
  {
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    pages: "1345",
    status: "unread",
    bookID: "1234",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: "295",
    status: "unread",
    bookID: "12345",
  },
];

class Book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.bookID = `${Date.now()}`;
  }
}

const renderBooks = () => {
  localStorage.setItem("books", JSON.stringify(books));

  renderBook.textContent = "";

  const fragment = document.createDocumentFragment();

  books.forEach((item) => {
    const clone = templateBook.cloneNode(true);

    clone.querySelector("h4").textContent = item.title;
    clone.querySelector("h5").textContent = item.author;
    clone.querySelector("h6").textContent = `Pages: ${item.pages}`;
    clone.querySelector("#btnStatusRead").dataset.id = item.bookID;
    clone.querySelector("#btnStatusUnread").dataset.id = item.bookID;
    clone.querySelector("#btnDelete").dataset.id = item.bookID;

    if (item.status === "read") {
      clone.querySelector("#btnStatusRead").classList.remove("d-none");
      clone.querySelector("#btnStatusUnread").classList.add("d-none");
    } else {
      clone.querySelector("#btnStatusRead").classList.add("d-none");
      clone.querySelector("#btnStatusUnread").classList.remove("d-none");
    }

    fragment.appendChild(clone);
  });
  renderBook.appendChild(fragment);
};

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  alert.classList.add("d-none");

  const datos = new FormData(formulario);
  const [title, author, pages, status] = [...datos.values()];

  if (!title.trim() || !author.trim() || !pages.trim()) {
    alert.classList.remove("d-none");
    return;
  }

  const book = new Book(title, author, pages, status);

  books.push(book);

  renderBooks();
});

document.addEventListener("click", (e) => {
  if (e.target.dataset.id) {
    if (e.target.matches(".btn-info")) {
      books.map((item) => {
        if (item.bookID === e.target.dataset.id) {
          item.status = "unread";
        }
        return item;
      });
    }
    if (e.target.matches(".btn-secondary")) {
      books.map((item) => {
        if (item.bookID === e.target.dataset.id) {
          item.status = "read";
        }
        return item;
      });
    }
  }
  if (e.target.matches(".btn-danger")) {
    books = books.filter((item) => item.bookID !== e.target.dataset.id);
  }
  renderBooks();
});

document.addEventListener("DOMContentLoaded", (e) => {
  if (localStorage.getItem("books")) {
    books = JSON.parse(localStorage.getItem("books"));
    renderBooks();
  }
});
