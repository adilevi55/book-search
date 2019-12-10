import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShearchComponent } from '../component/shearch/shearch.component';

const routes: Routes = [
{path: '', component: ShearchComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SearchRoutingModule {}
