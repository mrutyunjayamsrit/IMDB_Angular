import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyHomeComponent } from './lazy-home/lazy-home.component';
import { LazyImdbComponent } from './lazy-imdb/lazy-imdb.component';


const routes: Routes = [
  {path: '', component: LazyHomeComponent, children:[
    {path: '', redirectTo: 'home', pathMatch:'full'},
    {path: 'imdb', component: LazyHomeComponent},
    {path: 'home', component: LazyImdbComponent}
  ]},
  {path: '**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadHomeRoutingModule { }
