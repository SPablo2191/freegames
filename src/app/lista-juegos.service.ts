import { Injectable } from '@angular/core';
import { ApiGamesService } from './api-games.service';


@Injectable({
  providedIn: 'root'
})
export class ListaJuegosService {

  constructor(private apiServicio : ApiGamesService) { }

  //traer lista de juegos 
  obtenerListaDeJuegos(){
    return this.apiServicio.traerListaDejuegos();
  }
}
