import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistRoutingModule } from './wishlist-routing.module';
import { WishlistComponent } from '../component/wishlist.component';



@NgModule({
  declarations: [WishlistComponent],
  imports: [
    CommonModule,
    WishlistRoutingModule
  ],
  exports: [WishlistRoutingModule]
})
export class WishlistModule { }