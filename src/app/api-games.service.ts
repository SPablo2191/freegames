import { Juego } from './Models/juego';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiGamesService {
 private url = 'https://www.freetogame.com/api/games';
 //private url  = 'https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49';

  constructor(private httpClient : HttpClient) { }


  // metodo para traer los juegos
  traerListaDejuegos(){
    // const headers = {
    //   'X-RapidAPI-Key': '1709158c16msh589d240997f7a9cp15e136jsn6910915c1991',
    //   'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
    // //   'Access-Control-Allow-Origin' : '*',
    // 'Access-Control-Allow-Origin': '*'
    // //   'Accept' : 'application/json'
    // };

    // PREGUNTARLE A MARTIN ALGUN DIAA

    // const headers = new HttpHeaders()
    // .set('X-RapidAPI-Key','1709158c16msh589d240997f7a9cp15e136jsn6910915c1991')
    // .set('Accept', 'application/json')
    // .set("X-RapidAPI-Host", "free-to-play-games-database.p.rapidapi.com")
    // .set('Access-Control-Allow-Origin', '*');

    // .set("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
    // .set("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");


    return this.httpClient.get<Juego[]>(this.url);
  }
}
