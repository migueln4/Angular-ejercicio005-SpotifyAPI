/* Este archivo contiene solo y exclusivamente las rutas que existen dentro de nuestra aplicación */

import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {BuscarComponent} from './components/buscar/buscar.component';
import {ArtistaComponent} from './components/artista/artista.component';

export const ROUTES:Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'buscar', component: BuscarComponent},
    {path: 'artista/:id', component: ArtistaComponent},//Tengo que poner esto porque la página debe recibir un identificador (que lo proporciona la API de Spotify) para poder entrar aqu y mostrar la información que se quiere.
    {path: '', pathMatch:'full', redirectTo:'home'}, //Esto quiere decir que cualquier ruta vacía redirige al home
    {path: '**', pathMatch:'full', redirectTo:'home'} //Cualquier otro path diferente al que ya se ha puesto en este archivo redirige automáticamente a home.
];