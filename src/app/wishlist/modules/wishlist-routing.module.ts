import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WishlistComponent } from '../component/wishlist.component';
import { AuthGuardService } from 'src/app/services/auth-guard.service';

const routes: Routes = [
    {path: '', component: WishlistComponent,
    canActivate: [AuthGuardService]}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class WishlistRoutingModule {}
