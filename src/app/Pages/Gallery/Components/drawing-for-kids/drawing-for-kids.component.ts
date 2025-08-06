import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { HomenavComponent } from "../../../../shared/Components/homenav/homenav.component";

@Component({
  selector: 'app-drawing-for-kids',
  imports: [TranslatePipe, RouterLink, HomenavComponent],
  templateUrl: './drawing-for-kids.component.html',
  styleUrl: './drawing-for-kids.component.css'
})
export class DrawingForKidsComponent {


   land:boolean = false;
  pageScrollService: any;
  document: any;

   ngOnInit(){
    if(window.location.href.includes('/drawing')){
      this.land = true;

       this.pageScrollService.scroll({
    document: this.document,
    scrollTarget: '.theEnd',
  });
    }
  }
}
