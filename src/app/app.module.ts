import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShearchModule } from './shearch/module/shearch.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { WishlistModule } from './wishlist/modules/wishlist.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShearchModule,
    FormsModule,
    WishlistModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
