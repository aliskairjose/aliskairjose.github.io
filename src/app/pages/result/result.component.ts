import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../shared/services/api.service';
import { Movie } from '../../shared/interfaces/movie.interface';
import { SearchResponse } from '../../shared/interfaces/search-reponse.interface';
import { Params } from '../../shared/interfaces/params.interface';
@Component( {
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: [ './result.component.scss' ]
} )

export class ResultComponent implements OnInit {

  page = 1;
  movies: Movie[] = [];
  totalResult = 0;
  totalPages = 0
  params: Params;

  constructor(
    private router: Router,
    private api: ApiService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    // this.route.params.subscribe( params => this.search( params.query ) );
    this.route.queryParams.subscribe( ( params: Params ) => {
      if ( Object.keys( params ).length !== 0 ) {
        this.params = params;
        this.search( params.movie, params.page );
        this.page = params.page
      }
    } );
  }

  pageChange( page: number ): void {
    this.router.navigate( [], {
      relativeTo: this.route,
      queryParams: { page },
      queryParamsHandling: 'merge', // preserve the existing query params in the route
      skipLocationChange: false  // do trigger navigation
    } );

    this.search( this.params.movie, page )
  }

  private search( movie: string, page: number ): void {
    this.api.searchMovie( movie, page ).subscribe( res => {
      this.totalPages = res.total_pages;
      this.totalResult = res.total_results;
      this.movies = [ ...res.results ];
    } );
  }

}
