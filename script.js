let myLibrary = [];

// Funcion constructor

function book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    /* this.info = function() {
        console.log(title + " by " + author + ", " + pages + " pages, " 
                            + read);
    } */
}

// default's books

theHobbit = new book("The Hobbit", "J.R.R. Tolkien", 295, "Unread")
myLibrary.push(theHobbit)

donQuixote = new book("Don Quixote", "Miguel de Cervantes", 1345, "Unread")
myLibrary.push(donQuixote)

theLittlePrince = new book("The Little Prince", "Antoine de Saint-Exupery", 96, "Read")
myLibrary.push(theLittlePrince)

//

function addBookToLibrary() {
    myLibrary.push(new book(prompt("Title"), prompt("Author"), prompt("Pages"),
                             prompt("readStatus")))

}
