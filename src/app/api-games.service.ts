import { Caratula } from './Models/Caratula';

import { Catalogo } from './Models/Catalogo';
import { Juego } from './Models/juego';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, EMPTY, map } from 'rxjs';
import { __values } from 'tslib';
@Injectable({
  providedIn: 'root'
})
export class ApiGamesService {
 private url  = 'https://www.freetogame.com/api';
 private catalogo : Catalogo[] = [];
 private caratulas : Caratula[] = [];
 private juegos:Juego[]=[]



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

    let endpoint = '/games?sort-by=relevance';

    return this.httpClient.get<Juego[]>(this.url+endpoint)
    .pipe(
      map(
        (juego:Juego[])=>{

          this.juegos=(juego)
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

  traerCapturas(id : string){
    let params = new HttpParams();
    params = params.append('id',id);

    return this.httpClient.get<Juego>(this.url+'/game',{params: params}).pipe(
      map(juego=>{
        return {'id': juego.id,'title': juego.title,'screenshots': juego.screenshots[0].image} as Caratula;
      })
    );

  }
  traerCaratulaJuego(){

    this.juegos.forEach(
      (juego:Juego) =>{
        //this.juego1 = this.traerJuego2(juego.id.toString());
        //console.log(this.juego1);

        // .pipe(
        //   map(
        //     (juego:Juego)=>{
        //       this.caratulas.push({'id': juego.id,'title': juego.title,'screenshots': juego.screenshots});
        //       console.log(this.caratulas);

        //     }
        //   )
        // )
      }
    )
    //console.log('hola',this.juego1.id);
    // console.log('hola',this.catalogo);
    // this.catalogo.forEach((catalogo:Catalogo) =>{
    //   console.log(catalogo.id);
    //   this.traerJuego(catalogo.id.toString()).subscribe(
    //     (juegoDetallado : Juego) =>{
    //       console.log(juegoDetallado.id);
    //       this.caratulas.push({'id': catalogo.id,'title': catalogo.title,'screenshots': juegoDetallado.screenshots});
    //     }
    //   )
    // });


  }
  getCaratulas(){
    return this.caratulas;
  }
 getRandomArbitrary(min :number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  traerCaratulas(){
    console.log('hola',this.catalogo.length,this.catalogo);
    this.catalogo.forEach(catalogoIndividual=>{
      console.log(catalogoIndividual.title);
      this.traerCapturas(catalogoIndividual.id.toString()).subscribe((juego)=>{
         let datos = juego;
         console.log(datos);
         this.caratulas.push(datos);
      });
    });
    return this.caratulas;
  }

}
