import { Component, OnInit } from '@angular/core';
import { Juego } from '../juego';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  // lista de juegos
  catalogoJuegos: Juego[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
