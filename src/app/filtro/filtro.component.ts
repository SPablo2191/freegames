import { Plataforma } from './../Models/Plataforma';
import { Catalogo } from './../Models/Catalogo';
import { Genero } from './../Models/Genero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {
  listaCategorias = Genero;
  listaPlataforma = Plataforma;
  constructor() { }

  ngOnInit(): void {

  }

}
