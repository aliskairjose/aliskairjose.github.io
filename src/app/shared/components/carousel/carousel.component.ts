import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment.prod';

@Component( {
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: [ './carousel.component.scss' ]
} )
export class CarouselComponent implements OnInit {
  imgPath = environment.imgPath;

  @Input() items: any[] = [];
  @Input() type = 'movie';

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  goDetail( id: number, type: string ): void {
    this.router.navigate( [ `detail/${type}/${id}` ] );
  }

}
