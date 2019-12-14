import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistRoutingModule } from './wishlist-routing.module';
import { WishlistComponent } from '../component/wishlist.component';
import { BookModule } from 'src/app/book/module/book.module';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';



@NgModule({
  declarations: [WishlistComponent],
  imports: [
    CommonModule,
    WishlistRoutingModule,
    BookModule,
    AngularMaterialModule
  ],
  exports: [WishlistRoutingModule, WishlistComponent]
})
export class WishlistModule { }
