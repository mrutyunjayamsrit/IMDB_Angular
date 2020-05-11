import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  public topMovies = [];

  constructor(private _movieService: MovieService) { }

  ngOnInit(): void {
    this._movieService.getTopMovieList()
        .subscribe(data =>{
          console.log('Top Movies:', data);
          this.topMovies = data;
        })
  }
  
}
