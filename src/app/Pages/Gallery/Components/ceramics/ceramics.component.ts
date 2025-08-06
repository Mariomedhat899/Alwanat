import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { HomenavComponent } from "../../../../shared/Components/homenav/homenav.component";

@Component({
  selector: 'app-ceramics',
  imports: [TranslatePipe, RouterLink, HomenavComponent],
  templateUrl: './ceramics.component.html',
  styleUrl: './ceramics.component.css'
})
export class CeramicsComponent {

  land:boolean = false;
  pageScrollService: any;
  document: any;

   ngOnInit(){
    if(window.location.href.includes('/ceramics')){

      this.land = true;

       this.pageScrollService.scroll({
    document: this.document,
    scrollTarget: '.theEnd',
  });
    }
  }
}
