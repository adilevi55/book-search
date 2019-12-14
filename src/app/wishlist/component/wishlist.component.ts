import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/book.interface';
import { WishlistService } from 'src/app/services/wishlist.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  books: Book[];
  userName: string;
  constructor(
    public wishlistService: WishlistService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.userName = params.userName;
    });
  }
}
