# MyDreamApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Components:

App-component: Root component 
  This compoent shows Interpolation, event change and NgForm methods and Pipe methods and classvariable binding.

1) image-api : this component reads a movie details from the api and display it to user. fetch method is used to get the movies details from the api endpoint which is same as http get method.
  This component descibe the ngFor, ngIf concepts.
  This component make use of the services concept to fetch the movie details.

2) movies-list : This component has hardcoded top movie list in json file. to showcase Observables example in angular i used this component.
   This component also make use of httpClient and observable subscribe method.
   ngOnChanges method whenever input changes or Occurs, here input value is movie name enterd by user. 

3) input-movies: this component was created to accept movie names in search box from user and the submit. Currently i am not using this component.