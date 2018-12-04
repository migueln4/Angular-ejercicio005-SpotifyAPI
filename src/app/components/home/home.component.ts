import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevosLanzamientos:any[] = [];
  loading:boolean;
  error:boolean; //Esta variable sirve para controlar la presencia de los errores en el Home.

  constructor(private spotify:SpotifyService) {

    this.loading = true;//Lo primero que hace el programa nada más cargar el componente de Home es establecer esta variable a TRUE.
    this.error = false;

    console.log("Loading: "+this.loading);

      this.spotify.getNewReleases() //Es mucho mejor hacer el suscribe en el componente para poder tratar los datos directamente aquí.
          .subscribe( datos => { //Se debe especificar que los datos que vienen de la petición son del tipo any para que luego no dé errores a la hora de ir indagando dentro de sus propiedades.

            //this.nuevosLanzamientos = datos.albums.items; //Sabemos que esto es así porque hemos comprobado cómo está hecho en la consola. Con esta opción, hay que especificar que lo que se le pasa al subscribe es (datos:any)

            this.nuevosLanzamientos = datos; //Esta solución permite que esto sea mucho más sencillo. Si se quitan todos los comentarios, esto se queda en una función de una sola línea.
          });
    this.loading = false; //Cuando llega a esta línea es porque ya ha cargado toda la información del getNewReleases, así que el loading se vuelve a pone a false.
    console.log("Loading: "+this.loading);
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