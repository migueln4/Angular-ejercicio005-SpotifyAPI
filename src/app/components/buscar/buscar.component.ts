import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {

  resultadoBusqueda:any[] = [];

  loading:boolean = false;

  constructor(private spotify:SpotifyService) { }

  ngOnInit() {
  }

  busqueda(texto:string) { //Esto es muy parecido a todo lo que ya se ha hecho en el home.component.ts
    this.loading = true;
    console.log(texto);
    if(texto.length > 0) {//Si no pongo esto, da un error cuando se borra la barra de búsqueda completa.
    this.spotify.getArtistas(texto).subscribe( datos => {
        this.resultadoBusqueda = datos;
    })
  }
  this.loading = false;
  }

}
