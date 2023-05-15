import {
    AbstractControl,
    AsyncValidatorFn,
    ValidationErrors,
  } from '@angular/forms';
  import { Observable } from 'rxjs';
  import { map } from 'rxjs/operators';
import { UserHttpService } from 'src/app/service/user/user-http.service';
  
  
  export function checkEmailIsAvailable(
    userHttpService:  UserHttpService,
    user_id: number
  ): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return userHttpService
        .checkEmailIsAvailable(control.value, user_id)
        .pipe(
          map((isAvailable) =>
            isAvailable ? null : { checkEmailIsAvailable: true }
          )
        );
    };
  }
  
  