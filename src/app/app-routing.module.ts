import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import lazyHome from './lazy-load-home/lazy-load-home.module'
const routes: Routes = [
  {
    path: 'lazy-loading',
    loadChildren: () => import('./lazy-load-home/lazy-load-home.module').then(m => m.LazyLoadHomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
