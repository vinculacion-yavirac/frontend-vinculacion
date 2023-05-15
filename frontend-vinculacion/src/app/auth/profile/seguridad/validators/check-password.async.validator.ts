import {
    AbstractControl,
    AsyncValidatorFn,
    ValidationErrors,
  } from '@angular/forms';
  import { Observable, of } from 'rxjs';
  import { map } from 'rxjs/operators';
import { UserHttpService } from 'src/app/service/user/user-http.service';
  
  export function checkPasswordMatch(
    userHttpService: UserHttpService,
    user_id: number
  ): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      if (control.value) {
        return userHttpService
          .checkPasswordMatch(control.value, user_id)
          .pipe(map((isMatch) => (isMatch ? null : { checkPasswordMatch: true })));
      } else {
        return of(null);
      }
    };
  }
  
  