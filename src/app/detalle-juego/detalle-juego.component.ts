import { Juego } from './../Models/juego';

import { ApiGamesService } from './../api-games.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-detalle-juego',
  templateUrl: './detalle-juego.component.html',
  styleUrls: ['./detalle-juego.component.css']
})
export class DetalleJuegoComponent implements OnInit {
  //id del juego
  @Input() id: string = '';

  //juego
  juego : Juego = {} as Juego;

  constructor(//private activateRouter : ActivatedRoute,
    private servicioJuegos : ApiGamesService,
    private router : Router) { }

  ngOnInit(): void {
    //this.id = this.activateRouter.snapshot.params['id'];

    this.servicioJuegos.traerJuego(this.id).subscribe(juego =>{
      this.juego = juego;
    });
  }
  volverCatalogo(){
    this.router.navigate(['/']);
  }
}
