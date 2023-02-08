import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/** A hero's name can't match the given regular expression */
export function customDateValidation(maxYear: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = new Date(control.value).getFullYear() > maxYear;
    return forbidden ? { customDateValidation: { value: control.value } } : null;
  };
}
