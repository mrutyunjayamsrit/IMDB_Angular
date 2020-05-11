import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-movies',
  templateUrl: './input-movies.component.html',
  styleUrls: ['./input-movies.component.css']
})
export class InputMoviesComponent implements OnInit {
  public movieName = 'batman';
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(event: any) {
    console.log("Movie Name: ", event.movieName);
    this.movieName = event.movieName;
    return event.movieName;
 }

}
