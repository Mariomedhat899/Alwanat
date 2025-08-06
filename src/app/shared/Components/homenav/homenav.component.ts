import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-homenav',
  imports: [TranslatePipe],
  templateUrl: './homenav.component.html',
  styleUrl: './homenav.component.css',
  standalone: true
})
export class HomenavComponent {
  constructor(private router: Router) {}
  
  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
