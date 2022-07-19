import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiGamesService {
  private url = 'https://www.freetogame.com/api/games';

  constructor(private httpClient : HttpClient) { }


  // metodo para traer los juegos
  traerListaDejuegos(){
    return this.httpClient.get(this.url).subscribe(
      response => console.log(response),
      error => console.log(error)
    );
  }
}
