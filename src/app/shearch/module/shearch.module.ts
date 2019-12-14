import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './shearch-routing.module';
import { ShearchComponent } from '../component/shearch.component';
import { BookComponent } from 'src/app/book/component/book.component';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { BookModule } from 'src/app/book/module/book.module';

@NgModule({
  declarations: [
    ShearchComponent,

  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    AngularMaterialModule,
    BookModule
  ],
  exports: [
    SearchRoutingModule,
    ShearchComponent,
    BookComponent,
  ]
})
export class ShearchModule { }
