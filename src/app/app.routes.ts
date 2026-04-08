import { Routes } from '@angular/router';
import { RootComponent } from './pages/root/root.component';

export const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
      },
      {
        path: 'about',
        loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
      },
      {
        path: 'post/:id',
        loadComponent: () => import('./pages/post-detail/post-detail.component').then(m => m.PostDetailComponent),
      },
      {
        path: 'terms-and-conditions',
        loadComponent: () => import('./pages/terms-and-conditions/terms-and-conditions.component').then(m => m.TermsAndConditionsComponent),
      },
      {
        path: 'terms-of-use',
        loadComponent: () => import('./pages/terms-of-use/terms-of-use.component').then(m => m.TermsOfUseComponent),
      },
    ],
  },
];
