import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { NavbarComponent } from "../../../../Layout/Components/navbar/navbar.component";
import { HomenavComponent } from "../../../../shared/Components/homenav/homenav.component";

@Component({
  selector: 'app-about',
  imports: [TranslatePipe, RouterLink, NavbarComponent, HomenavComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
   standalone:true,
})
export class AboutComponent {

  land:boolean = false;
  ngOnInit(){
    if(window.location.href.includes('/about')){
      this.land = true;
    }
  }

}
