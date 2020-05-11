export class movieClient { 
  searchForMovie(movieName){
    // return this.http.get('http://www.omdbapi.com/?i=tt3896198&apikey=8ebab62e')
    //   .then(data=> data.json());
    return fetch(`http://www.omdbapi.com/?s=${movieName}&apikey=8ebab62e`)
    .then((data)=> data.json());
  }
}