
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
//componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ErrorComponent } from './error/error.component';
import { DetalleJuegoComponent } from './detalle-juego/detalle-juego.component';
import { FiltroComponent } from './filtro/filtro.component';
// para la api y firebase
import { HttpClientModule } from '@angular/common/http';

//font awesome
import { FontAwesomeModule,FaIconLibrary } from '@fortawesome/angular-fontawesome';
//iconos
import { faMagnifyingGlass,faFilter} from '@fortawesome/free-solid-svg-icons';

//POP-UPS
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//primeng
import { FieldsetModule } from 'primeng/fieldset';
import {CheckboxModule} from 'primeng/checkbox';
import {CarouselModule} from 'primeng/carousel';
import {ImageModule} from 'primeng/image';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {CardModule} from 'primeng/card';
import {DialogModule} from 'primeng/dialog';
//material angular
import { MatDialogModule } from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CarouselComponent } from './carousel/carousel.component';

//coreUI
//import { CarouselModule } from '@coreui/angular';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogoComponent,
    ErrorComponent,
    DetalleJuegoComponent,
    FiltroComponent,
    CarouselComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FieldsetModule,
    MatTooltipModule,
    CheckboxModule,
    MatCheckboxModule,
    ImageModule,
    ProgressSpinnerModule,
    CardModule,
    CarouselModule,
    DialogModule
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
