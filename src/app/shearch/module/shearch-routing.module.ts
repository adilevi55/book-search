import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShearchComponent } from '../component/shearch.component';
import { AuthGuardService } from 'src/app/services/auth-guard.service';

const routes: Routes = [
{path: '', component: ShearchComponent,
canActivate: [AuthGuardService]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SearchRoutingModule {}
