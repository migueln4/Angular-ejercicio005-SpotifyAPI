import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //Se importa esto porque es lo que permite saber cuál es la ruta activa. En este componente es importante saber esto porque es lo que nos va a a permitir leer el identificador del artista para luego traernos su información desde la API de Spotify.

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { 

    //Ahora, lo que se hace es suscribirse a cualquier cambio que puedan tener los parámetros de la URL a la que se ha accedido.
    this.activatedRoute.params.subscribe(parametros => 
      console.log(parametros)
      
      );

  }

  ngOnInit() {
  }

}
