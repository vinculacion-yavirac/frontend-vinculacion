import {
    AbstractControl,
    AsyncValidatorFn,
    ValidationErrors,
  } from '@angular/forms';
  import { Observable, of } from 'rxjs';
  import { map } from 'rxjs/operators';
  import { PacienteService } from '../../feature/pacientes/paciente.service';
  
  export function checkIdentificationIsAvailable(
    pacienteService: PacienteService,
    user_id: number
  ): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      if (!control.value) {
        return of(null);
      }
      return pacienteService
        .checkIdentificationIsAvailable(control.value, user_id)
        .pipe(
          map((isAvailable) =>
            isAvailable ? null : { checkIdentificationIsAvailable: true }
          )
        );
    };
  }