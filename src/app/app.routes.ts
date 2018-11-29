/* Este archivo contiene solo y exclusivamente las rutas que existen dentro de nuestra aplicación */
import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {BuscarComponent} from './components/buscar/buscar.component';

export const ROUTES:Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'buscar', component: BuscarComponent},
    {path: '', pathMatch:'full', redirectTo:'home'}, //Esto quiere decir que cualquier ruta vacía redirige al home
    {path: '**', pathMatch:'full', redirectTo:'home'} //Cualquier otro path diferente al que ya se ha puesto en este archivo redirige automáticamente a home.
];