import { Juego } from './juego';
import { Injectable } from '@angular/core';
import { ApiGamesService } from './api-games.service';


@Injectable({
  providedIn: 'root'
})
export class ListaJuegosService {
  listaJuegos: Juego[] = [];
  constructor(private apiServicio : ApiGamesService) { }

  //traer lista de juegos
  obtenerListaDeJuegos(){
    return this.apiServicio.traerListaDejuegos();
  }
  setJuego(juegos: Juego []){
    this.listaJuegos = juegos;
  }
}
