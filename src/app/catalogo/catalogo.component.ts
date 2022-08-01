import { Capturas } from './../Models/Capturas';
import { Catalogo } from './../Models/Catalogo';
import { FiltroComponent } from './../filtro/filtro.component';
import { Juego } from './../Models/juego';
import { Component, OnInit } from '@angular/core';
import { ListaJuegosService } from '../lista-juegos.service';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { Carousel } from 'primeng/carousel';

//iconos

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  // lista de juegos
  catalogoJuegos: Catalogo[] =[];
  carousel : Capturas [] = [];
  //instanciar iconos


  constructor(private listaJuegos : ListaJuegosService,
    private dialogRef : MatDialog) {

  }

  ngOnInit(): void {
    this.cargarCatalogo();
    this.cargarCarousel();
  }
  // cargar catalogo
  cargarCatalogo():void{
    this.listaJuegos.obtenerListaDeJuegos().subscribe(
      (juegos) =>{
        console.log(this.catalogoJuegos);
        this.catalogoJuegos = juegos;
      }
    );
  }
  //cargar carousel
  cargarCarousel(){
    this.carousel = this.listaJuegos.obtenerCarousel();
    console.log(this.listaJuegos.obtenerCarousel());
  }
  //retornar substring
  anioLanzamiento(anio : string){
    return anio.substring(0,4);
  }

  //mostrar filtros
  abrirFiltros(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    this.dialogRef.open(FiltroComponent,dialogConfig);
  }
}
