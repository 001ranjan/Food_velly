import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ImageWithFallbackComponent } from '../../components/image-with-fallback/image-with-fallback.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule, ImageWithFallbackComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
  visiblePosts = 9;
  isLoading = false;

  readonly imageIds = [
    '1773601102508-06141349a30e',
    '1739909301016-0824e6d8fc68',
    '1760263051331-0e4d3dafc9ff',
    '1641848421816-54345bb1fb47',
    '1758448500813-59f3770da00d',
    '1761304458796-f5c4b57da00c',
    '1606923829579-9e856ac2951d',
    '1567337710282-00832b415979',
    '1565299624946-b28f40a0ae38',
    '1504674900247-0877df9cc836',
  ];

  instagramPosts = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    image: `https://images.unsplash.com/photo-${this.imageIds[i % 10]}?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080`,
  }));

  get displayedPosts() {
    return this.instagramPosts.slice(0, this.visiblePosts);
  }

  loadMore() {
    if (this.isLoading || this.visiblePosts >= 30) return;
    this.isLoading = true;
    setTimeout(() => {
      this.visiblePosts = Math.min(this.visiblePosts + 9, 30);
      this.isLoading = false;
    }, 500);
  }

  @HostListener('window:scroll')
  onScroll() {
    if (this.visiblePosts >= 30 || this.isLoading) return;
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;
    if (scrollPosition >= pageHeight - 500) {
      this.loadMore();
    }
  }

  ngOnInit() {}
  ngOnDestroy() {}
}
