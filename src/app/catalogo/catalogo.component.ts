import { Juego } from './../juego';
import { Component, OnInit } from '@angular/core';
import { ListaJuegosService } from '../lista-juegos.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  // lista de juegos
  catalogoJuegos: Juego[]=[];
  juego : any;

  constructor(private listaJuegos : ListaJuegosService) { }

  ngOnInit(): void {
    this.cargarCatalogo();
  }
  // cargar catalogo
  cargarCatalogo():void{
    this.listaJuegos.obtenerListaDeJuegos().subscribe(
      juegos =>{
        console.log(Object.values(juegos));
        this.juego = juegos;
        //let juego = this.nuevoJuego(juegos);
        // this.catalogoJuegos = Object.values(juegos);
        // console.log("hola"+ this.catalogoJuegos[0].title);
      }
    );
  }

}
