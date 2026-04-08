import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="w-full py-8 border-t">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-gray-600">
          <a routerLink="/terms-and-conditions" class="hover:text-[#c8d946] transition-colors">
            Terms & Conditions
          </a>
          <span class="hidden md:inline">•</span>
          <a routerLink="/terms-of-use" class="hover:text-[#c8d946] transition-colors">
            Terms of Use
          </a>
          <span class="hidden md:inline">•</span>
          <span>&copy; {{ currentYear }} Food Valley</span>
        </div>
          <p class="text-sm text-gray-500 mt-4 text-center">
          Powered by <a href="https://www.kormoan.in" target="_blank" class="hover:text-[#c8d946]">kormoan</a>
        </p>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
