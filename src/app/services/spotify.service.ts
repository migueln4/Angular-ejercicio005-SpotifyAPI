import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //Hay que importar tanto el cliente como los headers para poder pasarle la información necesaria a la petición http
import { map } from 'rxjs/operators';//Aquí hay unos operadores muy interesantes para trabajar con ellos en Angular. Esto es un Reactive. El map sirve para filtrar cosas y solamente trabajaban con observables.

@Injectable({ //Es muy común que esto esté sin nada. Cuando esté así: @Injectable() quiere decir que solo podemos hacer uan instancia de este servicio inyectándolo en un component.ts que vaya a utilizarse. Eso sí, en el provider del app.module.ts debe figurar este servicio. 
  providedIn: 'root' //Cuando se queda esto puesto, al compilar esto hace como que el servicio ya está declarado por nosotros en el app.module.ts. Básicamente, esta es una forma automática de importarse el servicio.
})
export class SpotifyService {

  constructor(private http:HttpClient) {
    console.log("El servicio de Spotify está funcionando.");
   }

   getQuery(query:string) {
     const url = `https://api.spotify.com/v1/${query}`;

     const headers = new HttpHeaders({
      'Authorization':'Bearer BQCwombRQ3Zf7-ISAgUt2u4-HtaqGrSHMD0Sxpt_fc3Ilzp6eXRVnnJz__jDqJV9xc6m9vBD6qSTQpmPank'
    });

    return this.http.get(url,{headers});
   }

   getNewReleases() { //Aquí es donde se hace la petición HTTP para obtener los nuevos lanzamientos de Spotify

    /* ---- ESTO YA NO HACE FALTA PORQUE SE HA OPTIMIZADO AL CREAR EL MÉTODO getQuery ------
      const headers = new HttpHeaders({ //Aquí hay que poner el header que pide Spotify con el token de autorización. OJO, que este token solo dura una hora, así que hay que generar uno nuevo en Postman si se quiere seguir utilizando.
        //NOTA: Aunque se trata de una constante, no hay que ponerlo en mayúsculas, ya que no lo admite así la API. Hay que ceñirse a lo que piden exactamente.
        'Authorization':'Bearer BQC7eqcxGJ8Os1KBMUq-6_8w_RXLFE5dRPDL3Z0mAwWwsFp41Ba2ivuXfI6w7NrRX-GeNdy7kTukkDLz2Yw'
      });
      */

      
      /* --- ASÍ SERÍA UNA PETICIÓN GET PARA QUE MUESTRE LAS COSAS POR LA CONSOLA --- 

      this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers}).subscribe(datos => console.log(datos)); //Esta es la estructura básica de cómo se hace una llamada GET a la API de Spotify incorporando unos headers.

      //Por defecto, Spotify devuelve siempre los 20 últimos álbumes. Si se quieren añadir más, solo hay que poner: ?limit=N donde n es el número de álbumes que se quieren obtener de la API.
*/

/* ---ASÍ SERÍA SI LE QUEREMOS MANDAR TODA LA INFORMACIÓN AL COMPONENTE ---

      return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers}); //La idea es que el servicio simplemente consiga esta información y la retorne. Así, desde cualquier sitio que se llame se pueda usar el .suscribe.
      */

/* --- ASÍ SERÍA EL RETORNO SI NO SE HUBIERA OPTIMIZADO EN LA PARTE DE ARRIBA CON EL MÉTODO getQuery ----
      return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers}). //Hay un método que se llama pipe() que permite que se le pasen operadores map para filtrar los datos.
          
            pipe( map( datos => { //Aquí se le pueden hacer cualquier tipo de procesos, pero siempre hay que devolver algo para que lo coja la función que hay por encima en esta llamada

              return datos['albums'].items; //Hay dos soluciones apra que no dé el error en los álbumes. Uno es hacer que datos sea (datos:any). El otro es esta sintaxis. Lo que hace aquí es buscar en datos una propiedad que se llame albums.
            
          }));
          */

      return this.getQuery('browse/new-releases?country=es'). //Yo le he añadido "?country=es" porque lo he visto en la documentación del API de Spotify.
            pipe(map(datos => datos['albums'].items)); //El getQuery nos va a dar un observable, por eso se le puede pasar por un pipe y filtrar todos los datos para hacer un retorno como el que se espera en el componente.
   }

   getArtistas(texto:string) {

      /* ---- ESTO YA NO HACE FALTA PORQUE SE HA OPTIMIZADO AL CREAR EL MÉTODO getQuery ------

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQC7eqcxGJ8Os1KBMUq-6_8w_RXLFE5dRPDL3Z0mAwWwsFp41Ba2ivuXfI6w7NrRX-GeNdy7kTukkDLz2Yw'
    });
    */

    /* ------ ESTA ES LA FORMA EXTENDIDA DE UNA FUNCIÓN DE FLECHA, PERO HAY OTRA MÁS BREVE ------
    return this.http.get(`https://api.spotify.com/v1/search?q=${texto}&type=artist&limit=20`,{headers})
          .pipe(map (datos => {
                return datos['artists'].items;
          }));
          */
/* --- ASÍ SERÍA EL RETORNO SI NO SE HUBIERA OPTIMIZADO EN LA PARTE DE ARRIBA CON EL MÉTODO getQuery ----
    return this.http.get(`https://api.spotify.com/v1/search?q=${texto}&type=artist&limit=20`,{headers}).pipe(map(datos => datos['artists'].items));
    */
   return this.getQuery(`search?q=${texto}&type=artist&limit=20`).
   pipe(map(datos => datos['artists'].items));
   }
   
   //Para saber cómo hay que hacer la petición al endpoint, hay que ir a la web de Spotify.
   getArtista(id:string) {

    return this.getQuery(`artists/${id}`); //No se le pasa por el map porque ofrece toda la información que necesitamos. Por eso, no hay que mapear nada.

   }
   
}
