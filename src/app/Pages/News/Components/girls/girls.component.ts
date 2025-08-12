import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';
import { HomenavComponent } from '../../../../shared/Components/homenav/homenav.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';


@Component({
  selector: 'app-girls',
  imports: [TranslatePipe,RouterLink,HomenavComponent,NgxPageScrollCoreModule],
  templateUrl: './girls.component.html',
  styleUrl: './girls.component.css',
     standalone: true
})
export class GirlsComponent {

  
  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {
 }
 
 
  land:boolean = false;

   ngOnInit(){
    if(window.location.href.includes('/girls')){
      this.land = true;

       this.pageScrollService.scroll({
    document: this.document,
    scrollTarget: '.theEnd',
  });
    }
  }
}
