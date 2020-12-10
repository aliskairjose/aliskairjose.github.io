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
  tvShow: TV[] = [];
  mostPopularMovie: Movie = {};
  imgPath = environment.imgPath;

  constructor(
    private api: ApiService,
    private spinner: NgxSpinnerService,

  ) {
    this.spinner.show();
    forkJoin( [ this.api.popularMovies(), this.api.popularTv() ] ).subscribe( ( [ movieResponse, tvResponse ] ) => {
      this.spinner.hide();
      // console.log( movieResponse );
      // console.log( tvResponse );
      this.movies = [ ...movieResponse ];
      this.tvShow = [ ...tvResponse ];
      this.mostPopularMovie = this.movies[ 0 ];
      console.log( this.mostPopularMovie );
    } );
  }

  ngOnInit() {
  }

}
