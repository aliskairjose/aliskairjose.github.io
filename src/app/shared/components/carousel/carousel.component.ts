import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';

@Component( {
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: [ './carousel.component.scss' ]
} )
export class CarouselComponent implements OnInit {
  imgPath = environment.imgPath;

  @Input() items: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
