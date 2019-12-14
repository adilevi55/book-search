import { NgModule } from '@angular/core';
import { BookComponent } from '../component/book.component';
import { BookDialogComponent } from 'src/app/book-dialog/book-dialog.component';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';

@NgModule({
    entryComponents: [BookDialogComponent],
    declarations: [
        BookComponent,
        BookDialogComponent
    ],
    imports: [CommonModule, AngularMaterialModule],
    exports: [
        BookComponent,
        BookDialogComponent
    ]
})
export class BookModule { }
