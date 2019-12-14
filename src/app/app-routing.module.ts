import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'search/:userName', loadChildren: () => import('./shearch/module/shearch.module')
  .then(m => m.ShearchModule)},
  {path: 'wishlist/:userName', loadChildren: () => import('./wishlist/modules/wishlist.module')
  .then(m => m.WishlistModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
