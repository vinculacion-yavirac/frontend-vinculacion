import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordsMustBeEqual } from './validators/passwords-must-be-equal.validator';


import { MyErrorStateMatcher } from 'src/app/shared/matcher/error-state-matcher';
import { AuthHttpService } from 'src/app/service/auth/auth-http.service';
import { UserHttpService } from 'src/app/service/user/user-http.service';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'app-seguridad',
  templateUrl: './seguridad.component.html',
  styleUrls: ['./seguridad.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeguridadComponent  {
  // // Variables de clase que son inyectadas
  // currentUser = {} as User;
  // loading: boolean = true;

  // hide = true;

  // // Variables de clase que son inyectadas por referencia
  // matcher = new MyErrorStateMatcher();
  // public formGroup: FormGroup;

  // constructor(
  //   private authHttpService: AuthHttpService,
  //   private userHttpService:UserHttpService,
  //   public formBuilder: FormBuilder
  // ) {
  //   this.initForm();
  // }

  // initForm(): void {
  //   this.formGroup = this.formBuilder.group(
  //     {
  //       id: [0],
  //       email: [
  //         '',
  //         {
  //           validators: [
  //             Validators.required,
  //             Validators.email,
  //             Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$'),
  //           ],
  //           asyncValidators: [
  //             (control: any) =>
  //               checkEmailIsAvailable(
  //                 this.userHttpService,
  //                 this.currentUser.id
  //               )(control),
  //           ],
  //           updateOn: 'change',
  //         },
  //       ],
  //       password: [
  //         '',
  //         {
  //           validators: [Validators.minLength(8)],
  //           asyncValidators: [
  //             (control: any) =>
  //               checkPasswordMatch(
  //                 this.userHttpService,
  //                 this.currentUser.id
  //               )(control),
  //           ],
  //           updateOn: 'change',
  //         },
  //       ],
  //       new_password: [
  //         {
  //           value: '',
  //           disabled: true,
  //         },
  //       ],
  //       new_password_confirmation: [
  //         {
  //           value: '',
  //           disabled: true,
  //         },
  //       ],
  //       role: [null],
  //       active: [true],
  //       created_at: [null],
  //       person: [null],
  //     },
  //     { validators: [passwordsMustBeEqual] }
  //   );

  //   this.formGroup.valueChanges.subscribe((value) => {
  //     value.person.identification_type = value.person.identification_type?.id;
  //     value.person.nationality = value.person.nationality?.id;

  //     this.currentUser = value;
  //   });
  //   this.formGroup.get('password')?.statusChanges.subscribe((status) => {
  //     if (status === 'VALID' && this.formGroup.get('password')?.value) {
  //       this.formGroup.get('new_password')?.enable();
  //       this.formGroup.get('new_password_confirmation')?.enable();
  //       this.formGroup
  //         .get('new_password')
  //         ?.setValidators([
  //           Validators.required,
  //           Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@.]{8,}$/),
  //         ]);
  //       this.formGroup
  //         .get('new_password_confirmation')
  //         ?.setValidators([Validators.required]);
  //     } else {
  //       this.formGroup.get('new_password')?.disable();
  //       this.formGroup.get('new_password_confirmation')?.disable();
  //       this.formGroup.get('new_password')?.clearValidators();
  //       this.formGroup.get('new_password_confirmation')?.clearValidators();
  //     }
  //     this.formGroup.get('new_password')?.updateValueAndValidity();
  //     this.formGroup.get('new_password_confirmation')?.updateValueAndValidity();
  //   });
  // }

  // ngOnInit(): void {
  //   this.getCurrentUser();
  // }

  // onSubmit(): void {
  //   if (this.currentUser.id) {
  //     if (this.formGroup.valid) {
  //       this.updateUsuario();
  //       this.updatePassword();
  //     }
  //   }
  // }

  // getCurrentUser(): void {
  //   this.loading = true;

  //   this.authHttpService.getProfile().subscribe((res: any) => {
  //     if (res.status == 'success') {
  //       this.currentUser = res.data.user;
  //       this.formGroup.patchValue(this.currentUser);
  //     }
  //     this.loading = false;
  //   });
  // }

  // updateUsuario(): void {
  //   this.loading = true;

  //   this.userHttpService
  //     .updateUsuario(this.currentUser)
  //     .subscribe((res: any) => {
  //       if (res.status == 'success') {
  //         this.currentUser = res.data.user;
  //         this.formGroup.patchValue(this.currentUser);
  //       }
  //       this.loading = false;
  //     });
  // }

  // updatePassword(): void {
  //   this.loading = true;
  //   const password = {
  //     password: this.formGroup.get('new_password')?.value,
  //   };
  //   if (password.password) {
  //     this.userHttpService
  //       .updatePassword(password, this.currentUser.id)
  //       .subscribe((res: any) => {
  //         if (res.status === 'success') {
  //           this.formGroup.get('password')?.reset();
  //           this.formGroup.get('new_password')?.reset();
  //           this.formGroup.get('new_password_confirmation')?.reset();
  //         }
  //       });
  //   }
  //   this.loading = true;
  // }
}
function checkPasswordMatch(userHttpService: UserHttpService, id: number) {
  throw new Error('Function not implemented.');
}

