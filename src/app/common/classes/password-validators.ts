import { AbstractControl, AbstractControlOptions } from '@angular/forms';

export class PasswordValidators {
  static MatchValidator(
    control: AbstractControl
  ): AbstractControlOptions | null {
    const password: string = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (!confirmPassword?.length) {
      return null;
    }

    if (password !== confirmPassword) {
      control.get('confirmPassword')?.setErrors({ mismatch: true });
    }
    return null;
  }
}
