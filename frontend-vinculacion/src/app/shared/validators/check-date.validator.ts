import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function maxDateTodayValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const currentDate = new Date();
    const inputDate = new Date(control.value);
    if (inputDate <= currentDate) {
      return null;
    } else {
      return { maxDateToday: true };
    }
  };
}