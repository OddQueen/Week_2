
export class Book {
    public title: string;
    public nPages: number;
    public isbn: string;
    public author: string;
    public editorial: string;

    constructor(title: string, nPages: number, isbn: string, author: string, editorial: string) {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }

    toString(): string {
        return `Title - ${this.title}\nNumber of Pages - ${this.nPages}\nISBN - ${this.isbn}\nAuthor - ${this.author}\nEditorial - ${this.editorial}`;
    }
}
