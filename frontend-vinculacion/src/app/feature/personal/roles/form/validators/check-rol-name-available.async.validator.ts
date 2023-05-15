import {
    AbstractControl,
    AsyncValidatorFn,
    ValidationErrors,
  } from '@angular/forms';
  import { Observable } from 'rxjs';
  import { map } from 'rxjs/operators';
import { RolHttpService } from 'src/app/service/roles/rol-http.service';
  
  //de validación personalizada que verifica si un nombre de rol está disponible o no rolHttpServicey devuelve un error de validación si el nombre de rol no está disponible.
  export function checkRolNameIsAvailable(
    rolHttpService: RolHttpService,
    role_id: number
  ): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return rolHttpService
        .checkRolNameIsAvailable(control.value, role_id)
        .pipe(
          map((isAvailable) =>
            isAvailable ? null : { checkRolNameIsAvailable: true }
          )
        );
    };
  }
  
  