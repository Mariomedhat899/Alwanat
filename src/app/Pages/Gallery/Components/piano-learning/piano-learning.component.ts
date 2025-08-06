import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { HomenavComponent } from "../../../../shared/Components/homenav/homenav.component";

@Component({
  selector: 'app-piano-learning',
  imports: [RouterLink, TranslatePipe, HomenavComponent],
  templateUrl: './piano-learning.component.html',
  styleUrl: './piano-learning.component.css'
})
export class PianoLearningComponent {

  land:boolean = false;
  pageScrollService: any;
  document: any;

   ngOnInit(){
    if(window.location.href.includes('/piano')){
      this.land = true;

       this.pageScrollService.scroll({
    document: this.document,
    scrollTarget: '.theEnd',
  });
    }
  }

}
