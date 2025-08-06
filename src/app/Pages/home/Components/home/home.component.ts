import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeroComponent } from "../../../Hero/Components/hero/hero.component";
import { AboutComponent } from "../../../about/component/about/about.component";
import { EventsComponent } from "../../../events/events.component";
import { NavbarComponent } from '../../../../Layout/Components/navbar/navbar.component';
import { GalleryComponent } from "../../../Gallery/Components/gallery/gallery.component";

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, HeroComponent, AboutComponent, NavbarComponent, EventsComponent, GalleryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
   standalone:true,
})
export class HomeComponent {

}
