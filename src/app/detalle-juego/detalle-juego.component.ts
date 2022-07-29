
import { Juego } from './../Models/juego';
import { ApiGamesService } from './../api-games.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-detalle-juego',
  templateUrl: './detalle-juego.component.html',
  styleUrls: ['./detalle-juego.component.css']
})
export class DetalleJuegoComponent implements OnInit {
  //id del juego
  id: string = '';
  //juego
  juego : any;

  constructor(private activateRouter : ActivatedRoute,
    private servicioJuegos : ApiGamesService,
    private router : Router) { }

  ngOnInit(): void {
    this.id = this.activateRouter.snapshot.params['id'];
    this.servicioJuegos.traerJuego(this.id).subscribe(juego =>{
      this.juego = juego;
      console.log(this.juego);
    });
  }
  volverCatalogo(){
    this.router.navigate(['/catalogo']);
  }
}
