import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadHomeRoutingModule } from './lazy-load-home-routing.module';
import { LazyHomeComponent } from './lazy-home/lazy-home.component';
import {LazyImdbComponent} from './lazy-imdb/lazy-imdb.component';


@NgModule({
  declarations: [LazyHomeComponent, LazyImdbComponent],
  imports: [
    CommonModule,
    LazyLoadHomeRoutingModule
  ]
})
export class LazyLoadHomeModule { }
