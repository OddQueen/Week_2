
import { Book } from "./book";

export class Library {
    private books: Book[];
    private address: string;
    private manager: string;

    constructor(books: Book[], address: string, manager: string) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }

    getAddress(): string {
        return this.address;
    }

    setAddress(address: string): void {
        this.address = address;
    }

    getManager(): string {
        return this.manager;
    }

    setManager(manager: string): void {
        this.manager = manager;
    }

    toString(): string {
        let result = "";
        this.books.forEach((book, index) => {
            result += `Book${index + 1}:\n${book.toString()}\n\n`;
        });
        result += `Address - ${this.address}\nManager - ${this.manager}`;
        return result;
    }

    getNumberOfBooks(): number {
        return this.books.length;
    }

    findByAuthor(author: string): Book[] {
        return this.books.filter(book => book.author === author);
    }
}
