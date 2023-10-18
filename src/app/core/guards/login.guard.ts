import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {
  const loggedIn = inject(AuthService).isLoggedIn();
  if (loggedIn) {
    alert('Amonos que aqui asustan');
    inject(Router).navigate(['/content']);
    return false;
  }
  return true;
};
