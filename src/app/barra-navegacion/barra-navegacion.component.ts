import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {
  titulo = 'GamerFlix';
  busqueda : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }


}
