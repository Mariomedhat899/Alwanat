import { Component } from '@angular/core';
import { GymnasticsSliderComponent } from "./components/gymnastics-slider/gymnastics-slider.component";
import { TranslatePipe } from '@ngx-translate/core';
import { SevenYearsSliderComponent } from './components/seven-years-slider/seven-years-slider.component';
import { OurChampionsInGymnasticsSliderComponent } from "./components/our-champions-in-gymnastics-slider/our-champions-in-gymnastics-slider.component";
import { RouterLink } from '@angular/router';
import { AHistoricVisitFromDrMagdaSalehComponent } from "./components/a-historic-visit-from-dr.magda-saleh/a-historic-visit-from-dr.magda-saleh.component";
import { MessageOfLifeComponent } from "./components/message-of-life/message-of-life.component";
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';
import { HomenavComponent } from "../../shared/Components/homenav/homenav.component";

@Component({
  selector: 'app-events',
  imports: [NgxPageScrollCoreModule, GymnasticsSliderComponent, TranslatePipe, SevenYearsSliderComponent, OurChampionsInGymnasticsSliderComponent, RouterLink, AHistoricVisitFromDrMagdaSalehComponent, MessageOfLifeComponent, HomenavComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
   standalone:true,
})
export class EventsComponent {
  
  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {
 }
  
  
  
  land:boolean = false;

   ngOnInit(){
    if(window.location.href.includes('/events')){
      this.land = true;

       this.pageScrollService.scroll({
    document: this.document,
    scrollTarget: '.theEnd',
  });
    }
  }

}
