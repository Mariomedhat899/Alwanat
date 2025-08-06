import { Component } from '@angular/core';
import { NavbarComponent } from "../../../../Layout/Components/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from "../../../Hero/Components/hero/hero.component";
import { EventsComponent } from "../../../events/events.component";
import { AboutComponent } from "../../../about/component/about/about.component";

import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';
import { Transform } from 'stream';
import { FooterComponent } from '../../../../Layout/Components/footer/footer.component';
import { TestComponent } from '../../../../core/components/test/test.component';
@Component({
  selector: 'app-landing',
  imports:[RouterOutlet ,NavbarComponent,FooterComponent,TestComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('300ms ease-in-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class LandingComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }


  
}
