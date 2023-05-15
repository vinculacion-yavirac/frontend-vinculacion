import {
    AbstractControl,
    AsyncValidatorFn,
    ValidationErrors,
  } from '@angular/forms';
  import { Observable, of } from 'rxjs';
  import { map } from 'rxjs/operators';
  // importación de la librería de validación de cédula ecuatoriana
  import { verificarCedula } from 'udv-ec';
  
  export function udvEcIdentification(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return of(verificarCedula(control.value)).pipe(
        map((isValid) => (isValid ? null : { udvEcIdentification: true }))
      );
    };
  }
  