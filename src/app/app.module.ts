import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ErrorComponent } from './error/error.component';
import { FiltroComponent } from './filtro/filtro.component';
// para la api y firebase
import { HttpClientModule } from '@angular/common/http';
import { DetalleJuegoComponent } from './detalle-juego/detalle-juego.component';

//font awesome
import { FontAwesomeModule,FaIconLibrary } from '@fortawesome/angular-fontawesome';
//iconos
import { faMagnifyingGlass,faFilter} from '@fortawesome/free-solid-svg-icons';

//POP-UPS
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogoComponent,
    ErrorComponent,
    DetalleJuegoComponent,
    FiltroComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faMagnifyingGlass,
      faFilter
    );
  }
}
