import { Component } from '@angular/core';
import { SlideInterface } from '../image-slider/types/slide.interface';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  images: SlideInterface[] = [
    {
      url: 'assets/slider/5.jpg',
      title: 'Fifth slide',
    },
    {
      url: 'assets/slider/1.jpg',
      title: 'First slide',
    },
    {
      url: 'assets/slider/2.jpg',
      title: 'Second slide',
    },
    {
      url: 'assets/slider/3.jpg',
      title: 'Third slide',
    },
    {
      url: 'assets/slider/4.jpg',
      title: 'Fourth slide',
    },
  ];
}
