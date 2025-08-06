import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-seven-years-slider',
  imports: [CarouselModule,TranslatePipe],
  templateUrl: './seven-years-slider.component.html',
  styleUrl: './seven-years-slider.component.css'
})
export class SevenYearsSliderComponent {
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
