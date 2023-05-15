import {
    AbstractControl,
    FormControl,
    ValidationErrors,
    ValidatorFn,
  } from '@angular/forms';
  
  export const passwordsMustBeEqual: ValidatorFn = (
    formGroup: AbstractControl
  ): ValidationErrors | null => {
    const newPassword = formGroup.get('new_password') as FormControl;
    const newPasswordConfirmation = formGroup.get(
      'new_password_confirmation'
    ) as FormControl;
    if (newPassword.value !== newPasswordConfirmation.value) {
      formGroup
        .get('new_password_confirmation')
        ?.setErrors({ passwordsMustBeEqual: true });
      return { passwordsMustBeEqual: true };
    } else {
      return null;
    }
  };
  