import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {

  resultadoBusqueda:any[] = [];

  constructor(private spotify:SpotifyService) { }

  ngOnInit() {
  }

  busqueda(texto:string) { //Esto es muy parecido a todo lo que ya se ha hecho en el home.component.ts
    console.log(texto);
    this.spotify.getArtista(texto).subscribe( (datos:any) => {
        this.resultadoBusqueda = datos.artists.items;
        console.log(this.resultadoBusqueda);
    })
  }

}
