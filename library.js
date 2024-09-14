// Class Book
class Book {
    #isbn; // Private field for ISBN
  
    constructor(title, author, isbn) {
      this.title = title;
      this.author = author;
      this.#isbn = isbn;
      this.available = true; // Default value
    }
  
    // Getter for ISBN
    getIsbn() {
      return this.#isbn;
    }
  
    // Setter for ISBN 
    setIsbn(newIsbn) {
      this.#isbn = newIsbn;
    }
  
    // Method to borrow book
    borrowBook() {
      if (this.available) {
        this.available = false;
        console.log(`You've borrowed "${this.title}".`);
      } else {
        console.log(`"${this.title}" is currently not available.`);
      }
    }
  
    // Method to return book
    returnBook() {
      this.available = true;
      console.log(`"${this.title}" has been returned.`);
    }
  }
  
  // Class Library
  class Library {
    constructor() {
      this.books = []; // Array to store Book objects
    }
  
    // Method to add a book to the library
    addBook(book) {
      this.books.push(book);
      console.log(`Book "${book.title}" added to the library.`);
    }
  
    // Method to remove a book by ISBN
    removeBook(isbn) {
      const index = this.books.findIndex(book => book.getIsbn() === isbn);
      if (index !== -1) {
        const removedBook = this.books.splice(index, 1)[0];
        console.log(`Book "${removedBook.title}" removed from the library.`);
      } else {
        console.log(`Book with ISBN ${isbn} not found.`);
      }
    }
  
    // Method to find a book by title
    findBookByTitle(title) {
      const book = this.books.find(book => book.title === title);
      return book ? book : 'Book not found.';
    }
  }
  
  // Class DigitalLibrary inheriting from Library
  class DigitalLibrary extends Library {
    // Method to download a book if it's available
    downloadBook(isbn) {
      const book = this.books.find(book => book.getIsbn() === isbn);
      if (book) {
        if (book.available) {
          console.log(`Downloading "${book.title}"...`);
        } else {
          console.log(`Book "${book.title}" is not available for download.`);
        }
      } else {
        console.log(`Book with ISBN ${isbn} not found.`);
      }
    }
  }
  
  // Here is a practical example
  
  // Creating some books
  const book1 = new Book("Sell Like Crazy", "Chris Joe", "3456127812");
  const book2 = new Book("Nothing Is Impossible", "Maxwell Henry", "6734509851");
  const book3 = new Book("2019", "Brenda Pios", "2038867877");
  const book4 = new Book("Rise And Shine", "Dave Austin", "4834017893");
  const book5 = new Book("Billionaire Mind", "Andy Luke", "7187004348");
  
  // Create a library and add books
  const library = new Library();
  library.addBook(book1);
  library.addBook(book2);
  library.addBook(book3);
  
  
  // Find a book by title
  console.log(library.findBookByTitle("Nothing Is Impossible"));
  
  // Create a digital library and add books
  const digitalLibrary = new DigitalLibrary();
  digitalLibrary.addBook(book4);
  digitalLibrary.addBook(book5);
  
  // Download a book
  digitalLibrary.downloadBook("4834017893");
  
  // Borrow a book
  book5.borrowBook();
  digitalLibrary.downloadBook("7187004348"); // Should indicate book is not available
  
  // Return the book and try to download again
  book5.returnBook();
  digitalLibrary.downloadBook("7187004348");
  