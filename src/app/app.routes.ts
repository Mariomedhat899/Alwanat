import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './Pages/home/Components/landing/landing.component';
import { AboutComponent } from './Pages/about/component/about/about.component';
import { HomeComponent } from './Pages/home/Components/home/home.component';
import { animate, animation } from '@angular/animations';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { EventsComponent } from './Pages/events/events.component';
import { NgModule } from '@angular/core';
import { GalleryComponent } from './Pages/Gallery/Components/gallery/gallery.component';
import { PianoLearningComponent } from './Pages/Gallery/Components/piano-learning/piano-learning.component';
import { SportsDayComponent } from './Pages/Gallery/Components/sports-day/sports-day.component';
import { DrawingForKidsComponent } from './Pages/Gallery/Components/drawing-for-kids/drawing-for-kids.component';
import { CeramicsComponent } from './Pages/Gallery/Components/ceramics/ceramics.component';
import { FirstComponent } from './Pages/News/Components/first/first.component';
import { GirlsComponent } from './Pages/News/Components/girls/girls.component';
import { MinyaComponent } from './Pages/News/Components/minya/minya.component';


export const routes: Routes = [
    {
    path: '',
    component: LandingComponent,
    children: [
     
        {path:'', redirectTo:'home',pathMatch:'full'},
        {path:'home',component:HomeComponent,data:{animation:'home'}},
        {path:'about',component:AboutComponent,data:{animation:'about'}},
        {path:'events',component:EventsComponent,data:{animation:'events'}},
        {path:'gallery',component:GalleryComponent,data:{animation:'gallery'}},
        {path:'piano',component:PianoLearningComponent,data:{animation:'piano'}},
        {path:'sports',component:SportsDayComponent,data:{animation:'sports'}},
        {path:'drawing',component:DrawingForKidsComponent,data:{animation:'drawing'}},
        {path:'ceramics',component:CeramicsComponent,data:{animation:'ceramics'}},
        {path:'first',component:FirstComponent,data:{animation:'first'}},
        {path:'girls',component:GirlsComponent,data:{animation:'girls'}},
        {path:'minya',component:MinyaComponent,data:{animation:'minya'}},











      ] },
      {path:'**',component:NotFoundComponent},

      
    ];
    const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',           
  scrollPositionRestoration: 'enabled'  
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

   
