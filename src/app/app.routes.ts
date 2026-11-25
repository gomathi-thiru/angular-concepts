import { Routes } from '@angular/router';
import { HomeComponent } from './router/home';
import { ProfileComponent } from './router/profile';
import { DashboardComponent } from './router/dashboard';
import { NotfoundComponent } from './router/notfound';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'dashboard', redirectTo: 'profile', pathMatch: 'full' }, // Redirect
  {
    path: 'admin',
    canActivate: [authGuard],
    // Lazy-loaded standalone component
    loadComponent: () => import('./router/admin').then(m => m.AdminComponent)
  },
  { path: '**', component: NotfoundComponent } // Wildcard (404)
];
