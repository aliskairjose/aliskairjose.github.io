import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../shared/services/api.service';

@Component( {
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: [ './result.component.scss' ]
} )
export class ResultComponent implements OnInit {

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe( params => this.search( params.query ) );
  }

  private search( query: string ): void {
    this.api.searchMovie( query ).subscribe( result => console.log( result ) );
  }

}
