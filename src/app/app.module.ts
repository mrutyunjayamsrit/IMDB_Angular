import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputMoviesComponent } from './input-movies/input-movies.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageApiComponent } from './image-api/image-api.component';
import {movieClient} from './services/movie.clinet';
import {FormsModule} from '@angular/forms';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieService } from './movie.service';
// import { LazyHomeComponent } from './lazy-load-home/lazy-home/lazy-home.component';
// import { LazyImdbComponent } from './lazy-load-home/lazy-imdb/lazy-imdb.component';

@NgModule({
  declarations: [
    AppComponent,
    InputMoviesComponent,
    ImageApiComponent,
    MoviesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ movieClient, MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
