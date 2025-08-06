import { Component, inject } from '@angular/core';
import { TranslationService } from '../../../../core/services/translation.service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  imports: [TranslatePipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  private readonly translationService = inject(TranslationService);
}
