import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../book/component/book.component';
import { WishlistService } from '../services/wishlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-dialog',
  templateUrl: './book-dialog.component.html',
})
export class BookDialogComponent {

  // tslint:disable-next-line: no-input-rename
  constructor(
    public dialogRef: MatDialogRef<BookDialogComponent>,
    public wishlistService: WishlistService,
    private route: Router,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) { }

  addBookToWishlist(): void {
    this.wishlistService.addBook(this.data.book);
  }
  removeBookToWishlist() {
    this.wishlistService.removeBook(this.data.book);

    if (this.data.isWishlistPage) {
      this.dialogRef.close();
      if (this.wishlistService.books.length === 0) {
        this.route.navigate(['/search/' + this.data.userName]);
      }
    }
  }

}
