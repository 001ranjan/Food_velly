import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <header class="w-full py-6">
      <div class="container mx-auto px-4">
        <ng-container *ngIf="!isHome; else homeLogo">
          <div class="flex items-center justify-between md:grid md:grid-cols-3">
            <a routerLink="/" class="flex items-center gap-3 md:justify-self-start">
              <img src="assets/bg-logo.png" alt="Food Valley Logo" class="h-14 w-14 md:h-24 md:w-24 transition-all" />
            </a>
            <div class="hidden md:block"></div>
            <!-- Mobile Home Button -->
            <a routerLink="/" class="md:hidden flex items-center gap-2 px-6 py-2.5 bg-gradient-to-br from-[#3d4543] to-[#2a2f2d] text-[#c8d946] rounded-full text-sm hover:scale-105 transition-all shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              <span>Home</span>
            </a>
            <!-- Desktop Go Back Button -->
            <button (click)="goBack()" class="hidden md:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-br from-[#3d4543] to-[#2a2f2d] text-[#c8d946] rounded-full text-sm hover:scale-105 transition-all shadow-md md:justify-self-end">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
              <span>Go Back</span>
            </button>
          </div>
        </ng-container>
        <ng-template #homeLogo>
          <a routerLink="/" class="flex justify-center">
            <img src="assets/bg-logo.png" alt="Food Valley Logo" class="" width="140px" height="140px" />
          </a>
        </ng-template>
      </div>
    </header>
  `,
})
export class HeaderComponent {
  isHome = true;

  constructor(private router: Router, private location: Location) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isHome = event.urlAfterRedirects === '/';
      }
    });
  }

  goBack() {
    this.location.back();
  }
}
