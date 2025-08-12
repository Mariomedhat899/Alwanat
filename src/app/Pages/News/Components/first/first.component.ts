import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';
import { HomenavComponent } from '../../../../shared/Components/homenav/homenav.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';



@Component({
  selector: 'app-first',
  imports: [TranslatePipe,RouterLink,HomenavComponent,NgxPageScrollCoreModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css',
   standalone: true
})
export class FirstComponent {

  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {
 }
 
 
  land:boolean = false;

   ngOnInit(){
    if(window.location.href.includes('/first')){
      this.land = true;

       this.pageScrollService.scroll({
    document: this.document,
    scrollTarget: '.theEnd',
  });
    }
  }


}
