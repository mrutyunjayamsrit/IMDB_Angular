import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {movies} from './movies';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private _url: string = '../../assets/movies.json';
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  
  getTopMovieList(): Observable<movies[]>{
    return this.http.get<movies[]>(this._url);
  }
}
