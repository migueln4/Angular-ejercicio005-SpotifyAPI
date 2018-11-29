import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //Esto hay que importarlo desde cada componente en el que se vaya a sacar información de un API externo.

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(private http:HttpClient) { //Una vez que se inyecta este http aquí, ya se pueden hacer todo tipo de peticiones http, entre ellas el GET.

    this.http.get(https://restcountries.eu/rest/v2/lang/es);

   }

  ngOnInit() {
  }

}
