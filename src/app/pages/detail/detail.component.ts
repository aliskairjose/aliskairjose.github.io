import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../shared/services/api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { TV } from '../../shared/interfaces/tv.interface';
import { Movie } from '../../shared/interfaces/movie.interface';
import { environment } from '../../../environments/environment.prod';

@Component( {
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: [ './detail.component.scss' ]
} )
export class DetailComponent implements OnInit {

  data: Movie | TV = {};
  imgPath = environment.imgPath;
  isShowing = true;

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
    this.api.getDetail( params ).subscribe( response => {
      this.spinner.hide();
      this.isShowing = false;
      this.data = { ...response };
    } );
  }

}
