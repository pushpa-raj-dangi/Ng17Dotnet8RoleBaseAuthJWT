import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [FormsModule, MatSnackBarModule],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css',
})
export class ChangePasswordComponent {
  newPassword!: string;
  currentPassword!: string;
  authService = inject(AuthService);
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);

  changePassword() {
    this.authService
      .changePassword({
        email: this.authService.getUserDetail()?.email,
        newPassword: this.newPassword,
        currentPassword: this.currentPassword,
      })
      .subscribe({
        next: (response) => {
          if (response.isSuccess) {
            this.matSnackBar.open(response.message, 'Close', {
              duration: 3000,
            });
            this.authService.logout();
            this.router.navigate(['/login']);
          } else {
            this.matSnackBar.open(response.message, 'Close', {
              duration: 3000,
            });
          }
        },
        error: (err: HttpErrorResponse) => {
          this.matSnackBar.open(err.error.message, 'Close', {
            duration: 3000,
          });
        },
      });
  }
}
