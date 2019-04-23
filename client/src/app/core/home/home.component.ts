import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('myCarousel') myCarousel: NguCarousel<any>;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 3, lg: 3, all: 0 },
    load: 3,
    interval: { timing: 4000, initialDelay: 1000 },
    loop: true,
    touch: true,
    velocity: 0.2
  };

  items = [
    {
      'name': 'A',
      'p': 'P'
    },
    {
      'name': 'B',
      'p': 'P'
    },
    {
      'name': 'C',
      'p': 'P'
    },
    {
      'name': 'D',
      'p': 'P'
    },
    {
      'name': 'E',
      'p': 'P'
    },
    {
      'name': 'F',
      'p': 'P'
    }
  ];


  carouselTiles: any;

  constructor(private cdr: ChangeDetectorRef) {
    this.carouselTiles = JSON.parse(JSON.stringify(this.items));
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

}
