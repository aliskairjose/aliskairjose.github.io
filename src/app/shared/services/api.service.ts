import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';

@Injectable( {
  providedIn: 'root'
} )
export class ApiService {
  private api_key = environment.api_key;

  constructor(
    private http: HttpService
  ) { }

  /*
  ---------------------------------------------
  ---------------  TV  ------------------------
  ---------------------------------------------
  */

  /**
   * @description Muestra la lista de las series de TV más populares
   */
  popularTv(): Observable<any> {
    return this.http.get( `tv/popular?api_key=${this.api_key}` );
  }

  /*
    ---------------------------------------------
    ---------------  Movies  --------------------
    ---------------------------------------------
  */

  /**
   * @description Muestra las 4 peliculas más aclamadas
   */
  topRated(): Observable<any> {
    return this.http.get( `/movie/top_rated?api_key=${this.api_key}` );
  }

  /**
   * @description Muestra la lista de las peliculas más populares
   */
  popularMovies(): Observable<any> {
    return this.http.get( `trending/movie/week?api_key=${this.api_key}` );
  }
}
