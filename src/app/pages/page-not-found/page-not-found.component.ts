import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { default as data } from '../../../assets/data/http-error.json';
import { Error } from '../../shared/interfaces/error.interface';

@Component( {
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: [ './page-not-found.component.scss' ]
} )

export class PageNotFoundComponent implements OnInit {

  private data = data.errors;
  error: Error = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.error = this.data.find( item => item.code === params.code );
    } );
  }

  // Retorno de la pagina de error
  onClick(): void {
    this.router.navigateByUrl( '' );
  }

}
