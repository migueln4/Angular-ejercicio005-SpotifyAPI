import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {



  constructor(private spotify:SpotifyService) {
      this.spotify.getNewReleases();
   }

  ngOnInit() {
  }

}

/* ----- DE AQUÍ PARA ABAJO ESTÁ LA LLAMADA HTTP A UNA API QUE DEVUELVE INFORMACIÓN SOBRE PAÍSES DE HABLA HISPANA --------*/

/*
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //Esto hay que importarlo desde cada componente en el que se vaya a sacar información de un API externo.

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  paises:any[] = []; //Esta es una propiedad de la clase. La vamos a utilizar para que almacene la información que se reciba del GET.

  constructor(private http:HttpClient) { //Una vez que se inyecta este http aquí, ya se pueden hacer todo tipo de peticiones http, entre ellas el GET.
    
    console.log("Constructor del Home hecho.");
    //this.http.get('https://restcountries.eu/rest/v2/lang/es'); <---  Lo que significa esto es que le estamos diciendo a Angular: "Prepárate, porque, en algún momento, alguien se va a suscribir" (es decir, estar escuchando los cambios o información que pueda producir esta llamada)

    //Aquí se está recibiendo el dato y se está suscribiendo a él (como un observador). Lo que se recibe se guarda en una variable llamada respuesta con la que se hace una función de flecha para poder mostrarla en la consola.
    this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe( (respuesta:any) => {
      console.log(respuesta);
      this.paises = respuesta; //Una vez guardado esto aquí, ya se puede usar este array de objetos en la parte del HTML.
    })

   }

  ngOnInit() {
  }

}
*/