import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import images from '../assets/images.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public movieName = '';
  title = 'IMDB Movies ';
  greeting = 'Welcome to IMDB Movie Search app';
  image1 = images.image1;
  image2 = images.image2;


// To showcase class binding on text messages
public italic = true;
public isGreenColor = true;
public classMessage = {
  "text-color": this.isGreenColor,
  "text-special": this.italic
}
// get movie name from the input text box
// getMovieName(movieForm: NgForm){
//   console.log('MOVIE FORM: ', movieForm.value.movieName);
//   this.movieName = movieForm.value.movieName;
// }

getMovieName(value){
  console.log('Movie name:', value);
  this.movieName = value;
}

}
