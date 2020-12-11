import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { map } from 'rxjs/operators';
import { Movie } from '../interfaces/movie.interface';
import { TV } from '../interfaces/tv.interface';

@Injectable( {
  providedIn: 'root'
} )
export class ApiService {
  private apiKey = environment.apiKey;

  constructor(
    private http: HttpService
  ) { }


  /**
   * @description Muestra el detalle de la película o show de tv consultada
   * @param Id de la película o show a consultar
   */
  getDetail( params: any ): Observable<TV | Movie> {
    return this.http.get( `${params.type}/${params.id}?api_key=${this.apiKey}` );
  }

  /*
  ---------------------------------------------
  ---------------  TV  ------------------------
  ---------------------------------------------
  */

  /**
   * @description Muestra la lista de las series de TV más populares
   */
  popularTv(): Observable<TV[]> {
    return this.http.get( `tv/popular?api_key=${this.apiKey}` ).pipe(
      map( r => r.results )
    );
  }

  /*
    ---------------------------------------------
    ---------------  Movies  --------------------
    ---------------------------------------------
  */

  /**
   * @description Muestra las 4 peliculas más aclamadas
   */
  topRated(): Observable<Movie[]> {
    return this.http.get( `movie/top_rated?api_key=${this.apiKey}` ).pipe(
      map( r => r.results )
    );
  }

  /**
   * @description Muestra la lista de las peliculas más populares
   */
  popularMovies(): Observable<Movie[]> {
    return this.http.get( `trending/movie/week?api_key=${this.apiKey}` ).pipe(
      map( r => r.results )
    );
  }

  /**
   * @description Realiza la busqueda de las peliculas según parametros
   */
  searchMovie(): Observable<any> {
    return this.http.get( `search/movie` );
  }
}
