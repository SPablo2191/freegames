import { Catalogo } from './Models/Catalogo';
import { Juego } from './Models/juego';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiGamesService {
 private url  = 'https://www.freetogame.com/api';
 private catalogo : Catalogo[] = [];
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

    let endpoint = '/games?sort-by=popularity';

    return this.httpClient.get<Juego[]>(this.url+endpoint)
    .pipe(
      map(
        (juego:Juego[])=>{
          juego.forEach(element => {
              this.catalogo.push({'id':element.id,'title':element.title,'thumbnail':element.thumbnail,'genre':element.genre,'release_date': element.release_date});
          });
          return this.catalogo;
        }
      )
    )

    ;
  }
  traerJuego(id : string){
    let params = new HttpParams();
    params = params.append('id',id);

    //let endpoint = '/game?id='+id;
    return this.httpClient.get<Juego>(this.url+'/game',{params: params});
  }
}
