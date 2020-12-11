import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ApiService } from '../../shared/services/api.service';
import { Movie } from '../../shared/interfaces/movie.interface';
import { TV } from '../../shared/interfaces/tv.interface';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from '../../../environments/environment.prod';

@Component( {
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
} )
export class HomeComponent implements OnInit {

  movies: Movie[] = [];
  tvShows: TV[] = [];
  mostPopularMovie: Movie = {};
  topRated: Movie[] = [];
  imgPath = environment.imgPath;

  constructor(
    private api: ApiService,
    private spinner: NgxSpinnerService,

  ) {
    this.spinner.show();
    forkJoin( [ this.api.popularMovies(), this.api.popularTv(), this.api.topRated() ] )
      .subscribe( ( [ movieResponse, tvResponse, topRatedResponse ] ) => {
        this.spinner.hide();
        this.movies = [ ...movieResponse ];
        this.tvShows = [ ...tvResponse ];
        this.topRated = [ ...topRatedResponse ];
        this.mostPopularMovie = this.movies[ 0 ];
      } );
  }

  ngOnInit() {
  }

}
