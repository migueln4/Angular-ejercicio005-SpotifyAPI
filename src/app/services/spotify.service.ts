import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //Hay que importar tanto el cliente como los headers para poder pasarle la información necesaria a la petición http

@Injectable({ //Es muy común que esto esté sin nada. Cuando esté así: @Injectable() quiere decir que solo podemos hacer uan instancia de este servicio inyectándolo en un component.ts que vaya a utilizarse. Eso sí, en el provider del app.module.ts debe figurar este servicio. 
  providedIn: 'root' //Cuando se queda esto puesto, al compilar esto hace como que el servicio ya está declarado por nosotros en el app.module.ts. Básicamente, esta es una forma automática de importarse el servicio.
})
export class SpotifyService {

  constructor(private http:HttpClient) {
    console.log("El servicio de Spotify está funcionando.");
   }

   getNewReleases() { //Aquí es donde se hace la petición HTTP para obtener los nuevos lanzamientos de Spotify
      const headers = new HttpHeaders({ //Aquí hay que poner el header que pide Spotify con el token de autorización. OJO, que este token solo dura una hora, así que hay que generar uno nuevo en Postman si se quiere seguir utilizando.
        //NOTA: Aunque se trata de una constante, no hay que ponerlo en mayúsculas, ya que no lo admite así la API. Hay que ceñirse a lo que piden exactamente.
        'Authorization':'Bearer BQB-CM9U4r-1KIHZtlvuroVMLQXEraXVPXGFyl4P1abilXaD4VzxRZWX85qI6GRx-2nN_RU8nqdXGTbT0fw'
      });

      this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers}).subscribe(datos => console.log(datos)); //Esta es la estructura básica de cómo se hace una llamada GET a la API de Spotify incorporando unos headers.

      //Por defecto, Spotify devuelve siempre los 20 últimos álbumes. Si se quieren añadir más, solo hay que poner: ?limit=N donde n es el número de álbumes que se quieren obtener de la API.
   }
}
