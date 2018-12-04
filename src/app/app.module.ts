import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

//Para poder hacer peticiones HTTP también hay que hacer un import. Esto se usa para poder coger información desde fuera a APIs externas.
import {HttpClientModule} from '@angular/common/http'; //Este es el módulo que puede relizar las peticiones HTTP.

//Importar componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { LoadingComponent } from './components/shared/loading/loading.component';

//Importar las rutas
import { ROUTES } from './app.routes'; //Este es el archivo en el que están todas las rutas

//Pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ErrorComponent } from './components/shared/error/error.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscarComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagePipe,
    TarjetasComponent,
    LoadingComponent,
    DomseguroPipe,
    ErrorComponent
  ],
  imports: [ //Siempre que ponga "Module" va en la parte de los imports
    BrowserModule,
    RouterModule.forRoot(ROUTES,{useHash:true}), //Hay que poner arquí lo de las rutas, con esta función y asegurarse de que se le pasa por parámetro la constante que se ha definido en el archivo app.routes.ts. Se le pone el hash activo.
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
