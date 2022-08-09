import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  display: boolean =false;
  constructor() { }

  ngOnInit(): void {
  }
  //mostrar filtros
  abrirFiltros(){
    this.display = true;
  }
}
