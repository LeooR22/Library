let myLibrary = [];

//vinculacion con inputs html
const txtTitle = document.getElementById("title")
const txtAuthor = document.getElementById("author")
const txtPages = document.getElementById("pages")
const txtReadStatus = document.getElementById("readStatus")
//
const btnSubmit = document.getElementById("submit")

btnSubmit.addEventListener("click", uploadBook)


// Funcion constructor
function book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    /* this.info = function() {
        console.log(title + " by " + author + ", " + pages + " pages, " 
                            + read);
    } */
}
//

// Funcion Agregar libro a myLibrary
function uploadBook(){
    newBook = new book(txtTitle.value, txtAuthor.value, txtPages.value, txtReadStatus.value)
    myLibrary.push(newBook);
    txtTitle.value = "";
    txtAuthor.value = "";
    txtPages.value = "";
    txtReadStatus.value = "";
    document.getElementById("myLibraryTable").innerHTML = null
    buildTable(topTable, myLibrary, document.getElementById('myLibraryTable'));
}
//

//  carga de defaultBooks
function defaultBooks(){

theHobbit = new book("The Hobbit", "J.R.R. Tolkien", 295, "Unread")
myLibrary.push(theHobbit)

donQuixote = new book("Don Quixote", "Miguel de Cervantes", 1345, "Unread")
myLibrary.push(donQuixote)

theLittlePrince = new book("The Little Prince", "Antoine de Saint-Exupery", 96, "Read")
myLibrary.push(theLittlePrince)
}
defaultBooks()
//

// Creation of myLibrary table

var topTable = ["Title", "Author", "Pages", "Status"];

// Estructure of object table
function render() {
  //checkLocalStorage();
  $tableBody.innerHTML = "";
  myLibrary.forEach((book) => {
    const htmlBook = `
      <tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td><button class="status-button">${book.status}</button></td>
        <td><button class="delete">delete</button></td>
      </tr>
      `;
    $tableBody.insertAdjacentHTML("afterbegin", htmlBook);
  });
}

render();

