import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-our-champions-in-gymnastics-slider',
  imports: [CarouselModule,TranslatePipe],
  templateUrl: './our-champions-in-gymnastics-slider.component.html',
  styleUrl: './our-champions-in-gymnastics-slider.component.css'
})
export class OurChampionsInGymnasticsSliderComponent {
customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    rtl:true,
    navSpeed: 700,
    navText: ['<i class="fa-solid text-text fa-arrow-right"></i>', '<i class="fa-solid text-text fa-arrow-left"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
}
