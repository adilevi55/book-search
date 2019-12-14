import { Component, Input } from '@angular/core';
import { Book } from '../../interfaces/book.interface';
import { MatDialog } from '@angular/material/dialog';
import { BookDialogComponent } from '../../book-dialog/book-dialog.component';

export interface DialogData {
  book: Book;
  isWishlistPage: boolean;
  userName: any;
}
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
@Input() book: Book;
@Input() isWishlistPage: boolean;
@Input() userName: any;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
     this.dialog.open(BookDialogComponent, {
      width: '500px',
      data: {
        book: this.book,
        isWishlistPage: this.isWishlistPage,
        userName: this.userName
      }
    });
  }

}
