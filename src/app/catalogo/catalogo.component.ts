import { Caratula } from './../Models/Caratula';
import { Capturas } from './../Models/Capturas';
import { Catalogo } from './../Models/Catalogo';
import { FiltroComponent } from './../filtro/filtro.component';
import { Juego } from './../Models/juego';
import { Component, OnInit } from '@angular/core';
import { ListaJuegosService } from '../lista-juegos.service';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { Carousel } from 'primeng/carousel';
import { catchError } from 'rxjs';

//iconos

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  // lista de juegos
  catalogoJuegos: Catalogo[] =[];
  carousel : Caratula [] = [];
  //instanciar iconos


  constructor(private listaJuegos : ListaJuegosService,
    private dialogRef : MatDialog) {

  }

  ngOnInit(): void {
    this.cargarCatalogo();
    //this.cargarCarousel();
  }
  // cargar catalogo
  cargarCatalogo():void{
    this.listaJuegos.obtenerListaDeJuegos().subscribe(
      (juegos) =>{

        this.catalogoJuegos = juegos;
        console.log(this.catalogoJuegos);
        this.cargarCarousel();
      }
    );
  }
  //cargar carousel
  cargarCarousel(){
    // this.catalogoJuegos.forEach(catalogoIndividual=>{
    //   console.log(catalogoIndividual.title);
    //   this.listaJuegos.obtenerCaptura(catalogoIndividual.id).subscribe((juego)=>{
    //      let datos = juego;
    //      this.carousel.push(datos);
    //   });
    // });
    for (let index = 0; index < 6; index++) {
      this.listaJuegos.obtenerCaptura(this.catalogoJuegos[index].id).subscribe((juego)=>{
        let datos = juego;
        this.carousel.push(datos);
     });

    };
    console.log(this.carousel);
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
