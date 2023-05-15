import { AbstractControl, ValidatorFn } from '@angular/forms';

// Función que devuelve un validador de edad
export function ageValidator(minAge: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const currentDate = new Date();
    const inputDate = new Date(control.value);
    const diff = currentDate.getTime() - inputDate.getTime();
    const ageInMilliseconds = 1000 * 60 * 60 * 24 * 365.25;
    const age = Math.floor(diff / ageInMilliseconds);

    if (isNaN(age) || age < minAge) {
      return { ageValidator: true };
    }

    return null;
  };
}