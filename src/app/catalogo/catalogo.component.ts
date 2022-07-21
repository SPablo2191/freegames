import { Juego } from './../Models/juego';
import { Component, OnInit } from '@angular/core';
import { ListaJuegosService } from '../lista-juegos.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  // lista de juegos
  catalogoJuegos: Juego[] =[];

  constructor(private listaJuegos : ListaJuegosService) { }

  ngOnInit(): void {
    this.cargarCatalogo();
  }
  // cargar catalogo
  cargarCatalogo():void{
    this.listaJuegos.obtenerListaDeJuegos().subscribe(
      (juegos:any) =>{
        console.log(juegos)
        this.catalogoJuegos = juegos;
        console.log(this.catalogoJuegos.length);
      }
    );
  }

}
