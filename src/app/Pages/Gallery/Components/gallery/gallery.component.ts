import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { PianoLearningComponent } from "../piano-learning/piano-learning.component";
import { SportsDayComponent } from "../sports-day/sports-day.component";
import { DrawingForKidsComponent } from "../drawing-for-kids/drawing-for-kids.component";
import { CeramicsComponent } from "../ceramics/ceramics.component";

@Component({
  selector: 'app-gallery',
  imports: [TranslatePipe, PianoLearningComponent, SportsDayComponent, DrawingForKidsComponent, CeramicsComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

}
