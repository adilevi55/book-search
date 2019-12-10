import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './shearch-routing.module';
import { ShearchComponent } from '../component/shearch/shearch.component';



@NgModule({
  declarations: [ShearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule
  ],
  exports: [SearchRoutingModule]
})
export class ShearchModule { }
