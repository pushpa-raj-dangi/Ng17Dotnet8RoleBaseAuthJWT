import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  console.log(authService.getToken());

  if (!authService.getToken()) return next(req);

  const cloned = req.clone({
    headers: req.headers.set(
      'Authorization',
      'Bearer ' + authService.getToken()
    ),
  });

  return next(cloned).pipe(
    catchError((err: HttpErrorResponse) => {
      if (err.status === 401) {
        authService
          .refreshToken({
            email: authService.getUserDetail()?.email,
            token: authService.getToken() || '',
            refreshToken: authService.getRefreshToken() || '',
          })
          .subscribe({
            next: (response) => {
              if (response.isSuccess) {
                localStorage.setItem('user', JSON.stringify(response));
                const cloned = req.clone({
                  setHeaders: {
                    Authorization: `Bearer ${response.token}`,
                  },
                });
                location.reload();
              }
            },
            error: () => {
              authService.logout();
              router.navigate(['/login']);
            },
          });
      }
      return throwError(err);
    })
  );
};
