export interface ChangePasswordRequest {
  email: string;
  newPassword: string;
  currentPassword: string;
}
