import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book.interface';
@Injectable({
    providedIn: 'root'
})
export class WishlistService {
    books: Book[] = [];
    book: Book;
    constructor() {}

    addBook(book: Book) {
        this.books.push(book);
    }
    removeBook(book: Book) {
        // tslint:disable-next-line: only-arrow-functions
        const books = this.books.filter( function(value) {
            return value.id !== book.id;
        });
        this.books = books;
    }
    checkBookInWishlist(book): boolean {
        const found = this.books.find(b => b.id === book.id);
        if (found === undefined) {
            return false;
        } else {
            return true;
        }
    }
}
