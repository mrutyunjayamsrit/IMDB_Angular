import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {movieClient} from '../services/movie.clinet'


@Component({
  selector: 'app-image-api',
  templateUrl: './image-api.component.html',
  styleUrls: ['./image-api.component.css']
})
export class ImageApiComponent implements OnInit {
  @Input('name') movieName: string;
  public movies = [
    // {title: 'Avatar'},
    // {title: 'Harry Potter'}
  ];
  public title = '';
  constructor(private http:HttpClient, private movieClient: movieClient) {
   }

   ngOnInit(): void {
    }
    
    // seaarch for a movie
   ngOnChanges(){
    console.log('Movie Name is:', this.movieName);
    this.movieClient.searchForMovie(this.movieName)
    .then(movie => this.movies = movie.Search);
    
  }

  // getMovies(): Observable<movies[]>{
  //let images = this.http.get('https://jsonplaceholder.typicode.com/photos');
  //   let data = this.http.get<movies[]>(`http://www.omdbapi.com/?s=${this.movieName}&apikey=8ebab62e`);
  //   data.subscribe((data)=>{
  //     console.log(data);
  //     this.movies = data;
  //     return this.movies;
  //   });
  // }

}
