import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../shared/services/api.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component( {
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: [ './detail.component.scss' ]
} )
export class DetailComponent implements OnInit {

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
  ) {
    this.spinner.show();
    this.route.params.subscribe( params => this.loadDetail( params ) );
  }

  ngOnInit() {
  }

  private loadDetail( params: any ): void {
    this.api.getDetail( params ).subscribe( movie => {
      this.spinner.hide();
      console.log( movie );
    } );
  }

}
