import { AbstractControl } from "@angular/forms";

export function PasswordMatchValidator(
  control: AbstractControl
): { [key: string]: boolean } | null {
  const password = control.get("password").value;
  const confirmPassword = control.get("confirmPassword").value;

  return password && confirmPassword && password !== confirmPassword
    ? { mismatch: true }
    : null;
}
