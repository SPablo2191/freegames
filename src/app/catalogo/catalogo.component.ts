import { Caratula } from './../Models/Caratula';
import { Catalogo } from './../Models/Catalogo';
import { FiltroComponent } from './../filtro/filtro.component';
import { Component, OnInit } from '@angular/core';
import { ListaJuegosService } from '../lista-juegos.service';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';


//iconos

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  // lista de juegos
  idJuegoSeleccionado : string  = '';
  catalogoJuegos: Catalogo[] =[];
  carousel : Caratula [] = [];
  display : boolean =false;
  //mostrar item de carousel
  responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
];
  caratulaVisible : boolean = false;
  catalogoVisible : boolean = false;


  constructor(private listaJuegos : ListaJuegosService,
    private dialogRef : MatDialog) {

  }

  ngOnInit(): void {
    this.cargarCatalogo();
  }
  // cargar catalogo
  cargarCatalogo():void{
    this.listaJuegos.obtenerListaDeJuegos().subscribe(
      (juegos) =>{

        this.catalogoJuegos = juegos;
        this.cargarCarousel();
        this.catalogoVisible = true;
      }
    );
  }
  //cargar carousel
  cargarCarousel(){
    for (let index = 0; index < 3; index++) {
      this.listaJuegos.obtenerCaptura(this.catalogoJuegos[index].id).subscribe((juego)=>{
        let datos = juego;
        this.carousel.push(datos);
     });
    };
    this.caratulaVisible = true;
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
  //mostrar detalle de Juego
  mostrarDetalle(id :number){
    this.idJuegoSeleccionado = id.toString();
    this.display = true;

  }
  borrarId(){
    this.idJuegoSeleccionado = '';
  }

}
