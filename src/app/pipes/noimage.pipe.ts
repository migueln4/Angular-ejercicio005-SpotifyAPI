import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(imagenes:any[]):string {//Debe recibir un array con todas las imágenes que tiene el objeto del artista.
    
    //Hay que hacer varias validaciones.

    if(!imagenes) {
      return 'assets/img/noimage.png'; //Si no hay nada en el array de las imágenes, hay que utilizar una imagen por defecto para que la muestre.
    }

    if(imagenes.length > 0) { //En caso de que sí que haya cosas en el array
      return imagenes[0].url;
    } else {
      return 'assets/img/noimage.png';
    }


    return null;
  }

}
