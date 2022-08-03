import { Catalogo } from './Models/Catalogo';
import { Juego } from './Models/juego';
import { Injectable } from '@angular/core';
import { ApiGamesService } from './api-games.service';



@Injectable({
  providedIn: 'root'
})
export class ListaJuegosService {
  listaJuegos: Catalogo[] = [];
  constructor(private apiServicio : ApiGamesService) { }

  //traer lista de juegos
  obtenerListaDeJuegos(){
    return this.apiServicio.traerListaDejuegos();
  }

    //traer lista de juegos
//   obtenerListaDeJuegos2(){
//     this.apiServicio.traerListaDejuegos().subscribe(res =>
//       {

//       }
//     );
// }
setJuego(juegos: Juego []){
  this.listaJuegos = juegos;
}
obtenerCaratulas(){
  return this.apiServicio.traerCaratulas();
}
obtenerCaptura(id : number){
  return this.apiServicio.traerCapturas(id.toString());
}
}
