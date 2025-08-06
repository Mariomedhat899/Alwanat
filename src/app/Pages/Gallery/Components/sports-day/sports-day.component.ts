import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { HomenavComponent } from "../../../../shared/Components/homenav/homenav.component";

@Component({
  selector: 'app-sports-day',
  imports: [RouterLink, TranslatePipe, HomenavComponent],
  templateUrl: './sports-day.component.html',
  styleUrl: './sports-day.component.css'
})
export class SportsDayComponent {

   land:boolean = false;
  pageScrollService: any;
  document: any;

   ngOnInit(){
    if(window.location.href.includes('/sports')){
      this.land = true;

       this.pageScrollService.scroll({
    document: this.document,
    scrollTarget: '.theEnd',
  });
    }
  }

}
