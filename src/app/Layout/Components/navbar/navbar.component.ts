import { Component, inject, PLATFORM_ID, Inject, HostListener } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { TranslationService } from '../../../core/services/translation.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NavigationEnd, RouterLink } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [TranslatePipe,CommonModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  private readonly translationService = inject(TranslationService);

  ngOnInit() {
  this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
      const tree = this.router.parseUrl(this.router.url);
      if (tree.fragment) {
        setTimeout(() => {
          this.viewportScroller.scrollToAnchor(tree.fragment!);
        }, 50);
      }
    }
  });
}

  dropdownOpen = false;
  screenWidth: number = 0;
  window: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.window = window;
      this.screenWidth = window.innerWidth;
    }
  }
  private viewportScroller: ViewportScroller = inject(ViewportScroller);
  private router: Router = inject(Router);

  scrollToAnchor(anchor: string) {
  this.viewportScroller.scrollToAnchor(anchor);
}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth = window.innerWidth;
    }
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
  
  // Toggle mobile menu
  toggleMobileMenu() {
    if (isPlatformBrowser(this.platformId)) {
      const navbarDefault = document.getElementById('navbar-default');
      if (navbarDefault) {
        navbarDefault.classList.toggle('hidden');
      }
    }
  }
   isVisible = true;
  lastScrollTop = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > this.lastScrollTop) {
      // Scrolling down
      this.isVisible = false;
    } else {
      // Scrolling up
      this.isVisible = true;
    }

    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scroll
  }

  lang = localStorage.getItem('lang') || 'en';

  SelectedLange(lang:string){
    this.translationService.changeLang(lang)
    this.lang = lang;
    this.dropdownOpen = false; // Close the dropdown after selection
  }

  isRtl(): boolean {
    return isPlatformBrowser(this.platformId) && document.documentElement.dir === 'rtl';
  }
  
  isMobile(): boolean {
    return this.screenWidth < 768;
  }
}
