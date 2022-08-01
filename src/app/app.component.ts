import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FiltroComponent } from './filtro/filtro.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'GamerFlix';
  constructor(private dialogRef : MatDialog){
  }
    //mostrar filtros
    abrirFiltros(){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = false;
      dialogConfig.autoFocus = true;
      this.dialogRef.open(FiltroComponent,dialogConfig);
    }
}
