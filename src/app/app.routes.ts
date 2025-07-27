import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'accueil',
    loadComponent: () => import('./screens/welcome/welcome').then(m => m.Welcome),
  },
  {
    path: 'vlogs',
    loadComponent: () => import('./screens/vlogs/vlog-list/vlog-list').then(m => m.VlogList),
  },
  {
    path: 'vlog/:id',
    loadComponent: () => import('./screens/vlogs/vlog-details/vlog-details').then(m => m.VlogDetails),
  },
  {
    path: '',
    redirectTo: '/accueil',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/accueil'
  }
];
