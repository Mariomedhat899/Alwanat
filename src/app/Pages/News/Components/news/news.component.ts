import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { HomenavComponent } from "../../../../shared/Components/homenav/homenav.component";
import { FirstComponent } from "../first/first.component";
import { GirlsComponent } from "../girls/girls.component";
import { MinyaComponent } from "../minya/minya.component";


@Component({
  selector: 'app-news',
  imports: [TranslatePipe, FirstComponent, GirlsComponent, MinyaComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {



}
