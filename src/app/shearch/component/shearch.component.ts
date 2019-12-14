import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject } from 'rxjs';
import {
  debounceTime, map,
  distinctUntilChanged,
  switchMap, filter
 } from 'rxjs/operators';
import { HttpService } from 'src/app/services/http.service';
import { Book } from 'src/app/interfaces/book.interface';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-shearch',
  templateUrl: './shearch.component.html',
  styleUrls: ['./shearch.component.css']
})
export class ShearchComponent implements OnInit, OnDestroy {
  userName: string;
  inputValoue$ = new Subject<string>();
  books: Book[] = [];
  page = 0;
  constructor(
    private route: ActivatedRoute,
    private http: HttpService,
    public wishlistService: WishlistService,

  ) { }
  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
      this.userName = params.userName;
    });
    this.inputValoue$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      filter(inputValoue => inputValoue !== ''),
      switchMap(
        (inputValoue: string) => this.http.bookSearch(inputValoue, this.page.toString())))
      .pipe(map(value => value.items))
    .subscribe((books: Book[]) => {
      this.books = books;
    });

  }
  search(inputValoue) {
    this.inputValoue$.next(inputValoue);
  }

  ngOnDestroy(): void {
    this.inputValoue$.unsubscribe();
  }
}
