import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  @Input() elementos:any[] = [];

  constructor(private router:Router) { }

  ngOnInit() {
  }

  verArtista(elemento:any) { //Nos puede venir un artsita o un álbum. Pero en el objeto tenemos el tipo que es, así que podemos hacer una condición a raíz de esto.
    console.log(elemento);

    let artistaId;

    if(elemento.type === 'artist') { //Si es artista
      artistaId = elemento.id;
    } else { //Si no es artista, es un álbum
      artistaId = elemento.artists[0].id; //Esto se consigue mirando el objeto y cómo lo pinta en consola
    }

    console.log("El ID del artista seleccioando es: "+artistaId);

    this.router.navigate(['/artista',artistaId]);//Recordatorio: cuando se ponen los corchetes dentro del paréntesis es porque se trata de navegar a una ruta en particular que tiene un parámetro. Ahí se le pasan los dos datos que necesita: la ruta a la que queremos ir y el identificador que le hemos dicho que pida.
  }

}
