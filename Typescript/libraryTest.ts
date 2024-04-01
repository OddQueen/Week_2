
import { Library } from "./library";
import { Book } from "./book";

const books: Book[] = [
    new Book("La sombra del viento", 565, "978-84-08-04364-5", "Carlos Ruiz Zafón", "Planeta"),
    new Book("El nombre del viento", 880, "978-84-99-08247-9", "Patrick Rothfuss", "Debolsillo"),
    new Book("Cien años de soledad", 512, "978-84-39-70387-7", "Gabriel García Márquez", "Literatura Random House")
];

let library = new Library(books, "Calle Biblioteca 123", "Juan Pérez");

console.log(library.toString());

console.log("\nNúmero de libros en la biblioteca:", library.getNumberOfBooks());

let author = "Carlos Ruiz Zafón";
let booksByAuthor = library.findByAuthor(author);
console.log(`\nLibros encontrados del autor ${author}:`);
booksByAuthor.forEach(book => console.log(book.toString()));
