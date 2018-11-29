import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

import { ROUTES } from './app.routes'; //Este es el archivo en el que están todas las rutas

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscarComponent,
    ArtistaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES,{useHash:true}) //Hay que poner arquí lo de las rutas, con esta función y asegurarse de que se le pasa por parámetro la constante que se ha definido en el archivo app.routes.ts. Se le pone el hash activo.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
