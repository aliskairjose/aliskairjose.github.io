import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';
import { environment } from '../../../../environments/environment.prod';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: [ './top-rated.component.scss' ]
} )
export class TopRatedComponent implements OnInit {
  imgPath = environment.imgPath;

  @Input() items: Movie[] = [];

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  goDetail( id: number ): void {
    this.router.navigate( [ `detail/movie/${id}` ] );
  }
}
