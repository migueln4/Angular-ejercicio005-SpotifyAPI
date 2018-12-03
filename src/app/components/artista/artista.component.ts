import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //Se importa esto porque es lo que permite saber cuál es la ruta activa. En este componente es importante saber esto porque es lo que nos va a a permitir leer el identificador del artista para luego traernos su información desde la API de Spotify.
import { SpotifyService } from 'src/app/services/spotify.service'; //Como vamos a consumir de la API de Spotify, también tenemos que importar el servicio que se encarga de eso.

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  artista:any = [];
  loading:boolean = true;

  constructor(private activatedRoute:ActivatedRoute,
              private spotify:SpotifyService) {
                
    this.loading = true;

    //Ahora, lo que se hace es suscribirse a cualquier cambio que puedan tener los parámetros de la URL a la que se ha accedido.
    this.activatedRoute.params.subscribe(parametros => 
      this.getArtista(parametros['id'])
      );//En esta función, lo que se hace es extraer la información de la URL. De ahí, tenemos dos cosas que nos interesan: la propia dirección y el id que le hemos pasado. Por eso, lo que va entre comillas especificado es el id. Eso es lo que se utiliza para llamar a la función que se ha definido más abajo que es la que llama al servicio.
  }

  ngOnInit() {
  }

  getArtista(id:string) {
    
    this.loading = true;

    this.spotify.getArtista(id)
        .subscribe(artista => {
          console.log(artista);
          this.artista = artista; //Cogemos el objeto que nos manda el servicio y lo guardamos en el objeto que hemos creado en esta clase.
          this.loading=false; //Esto debe venir dentro de esta función de fecha porque solo se va a poner a false esta variable exactamente cuando se ha cargado el objeto artista que se ha recibido del servicio en la propiedad que se ha declarado en la clase del componente.
        });
  }

}
