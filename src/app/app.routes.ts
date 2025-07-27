import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'accueil',
    loadComponent: () => import('./screens/welcome/welcome').then(m => m.Welcome),
  },
  {
    path: '',
    redirectTo: '/accueil',
    pathMatch: 'full'
  }
];
