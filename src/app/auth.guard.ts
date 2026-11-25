import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const isLoggedIn = true;

  // Allow access if logged in; otherwise redirect to home
  return isLoggedIn ? true : router.createUrlTree(['/']);
};
