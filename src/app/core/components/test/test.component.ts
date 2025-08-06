import { Component, Inject, InjectionToken } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';
import { PageScrollInstance } from 'ngx-page-scroll-core';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {
 }

 scrollToEnd(): void {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '.theEnd', 
    });
}
}

