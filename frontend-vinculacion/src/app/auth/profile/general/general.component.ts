// // Importaciones de Angular
import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';



// import {
//   MAT_MOMENT_DATE_FORMATS,
//   MomentDateAdapter,
//   MAT_MOMENT_DATE_ADAPTER_OPTIONS,
// } from '@angular/material-moment-adapter';

// import {
//   DateAdapter,
//   MAT_DATE_FORMATS,
//   MAT_DATE_LOCALE,
// } from '@angular/material/core';

// import 'moment/locale/ja';
// import 'moment/locale/fr';

// import { AuthHttpService } from 'src/app/service/auth/auth-http.service';
// import { User } from 'src/app/models/user/user';
// import { UserHttpService } from 'src/app/service/user/user-http.service';

@Component({
  selector: 'perfil-general',
  templateUrl: './general.component.html',
  providers: [
    // { provide: MAT_DATE_LOCALE, useValue: 'es-EC' },
    // {
    //   provide: DateAdapter,
    //   useClass: MomentDateAdapter,
    //   deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    // },
    // { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class ProfilePersonalDataComponent  {
//   // Variables de clase que son inyectadas
//   currentUser = {} as User;

//   loading: boolean = true;

//   // Variables de clase que son inyectadas por referencia
//   matcher = new MyErrorStateMatcher();
//   public formGroup: FormGroup;

//   constructor(
//     private authHttpService: AuthHttpService,
//     private userHttpService:UserHttpService,
//     public formBuilder: FormBuilder,
//   ) {
//     this.initForm();
//   }

//   initForm() {
//     this.formGroup = this.formBuilder.group({
//       id: [0],
//       email: [''],
//       role: [null],
//       active: [true],
//       updated_at: [null],
//       person: this.formBuilder.group({
//         identification_type: ['', [Validators.required]],
//         identification: [
//           '',
//           {
//             validators: [
//               Validators.required,
//               Validators.minLength(10),
//               Validators.maxLength(10),
//             ],
//             asyncValidators: [
//               (control: any) =>
//                 checkIdentificationIsAvailable(
//                   this.userHttpService,
//                   this.currentUser.id
//                 )(control),
//               udvEcIdentification(),
//             ],
//             updateOn: 'change',
//           },
//         ],
//         names: [
//           '',
//           [
//             Validators.required,
//             Validators.minLength(3),
//             Validators.pattern('[A-Za-z]{3,20} [A-Za-z]{3,20}'),
//           ],
//         ],
//         last_names: [
//           '',
//           [
//             Validators.required,
//             Validators.minLength(3),
//             Validators.pattern('[A-Za-z]{3,20} [A-Za-z]{3,20}'),
//           ],
//         ],
//         gender: [''],
//         date_birth: ['', ageValidator(3)],
//         mobile_phone: [
//           '',
//           [
//             Validators.minLength(10),
//             Validators.maxLength(10),
//             Validators.pattern('^[0-9]{3}[0-9]{7}$'),
//           ],
//         ],
//         address: ['', [Validators.minLength(10), Validators.maxLength(100)]],
//         province: [
//           {
//             value: '',
//             disabled: true,
//           },
//           [Validators.required],
//         ],
//         canton: [
//           {
//             value: '',
//             disabled: true,
//           },
//           [Validators.required],
//         ],
//         parish: [
//           {
//             value: '',
//             disabled: true,
//           },
//           [Validators.required],
//         ],
//       }),
//     });
//     this.formGroup.valueChanges.subscribe((value) => {
//       this.currentUser = value;
//       this.currentUser.person.date_birth =
//         this.formGroup.get('person.date_birth')?.value;
//     });
//     this.formGroup.get('person.address')?.statusChanges.subscribe((status) => {
//       if (status === 'VALID' && this.formGroup.get('person.address')?.value) {
//         this.formGroup.get('person.province')?.enable();
//         this.formGroup.get('person.canton')?.enable();
//         this.formGroup.get('person.parish')?.enable();
//       } else {
//         this.formGroup.get('person.province')?.disable();
//         this.formGroup.get('person.canton')?.disable();
//         this.formGroup.get('person.parish')?.disable();
//       }
//     });
//    this.formGroup
//      .get('person.identification_type')
//      ?.valueChanges.subscribe((identificationType) => {
//        this.formGroup.get('person.identification')?.enable();

//        const identificationControl = this.formGroup.get(
//          'person.identification'
//        );

//        if (normalize(identificationType) === 'cedula') {
//          identificationControl?.setValidators([
//            Validators.required,
//            Validators.minLength(10),
//            Validators.maxLength(10),
//          ]);
//          identificationControl?.setAsyncValidators([
//            udvEcIdentification(),
//            (control: any) =>
//              checkIdentificationIsAvailable(
//                this.userHttpService,
//                this.currentUser.id
//              )(control),
//          ]);
//        } else {
//          identificationControl?.clearValidators();
//          identificationControl?.setValidators([Validators.required]);
//          identificationControl?.clearAsyncValidators();
//          identificationControl?.setAsyncValidators([
//            (control: any) =>
//              checkIdentificationIsAvailable(
//                this.userHttpService,
//                this.currentUser.id
//              )(control),
//          ]);
//        }
//        identificationControl?.updateValueAndValidity();
//      });
//   }

//   ngOnInit(): void {
//     this.getCurrentUser();
//   }

//   onSubmit() {
//     if (this.currentUser.id) {
//       if (this.formGroup.valid) {
//         this.updateUsuario();
//       }
//     }
//   }

//   getCurrentUser() {
//     this.loading = true;
//     this.authHttpService.getProfile().subscribe((res: any) => {
//       if (res.status == 'success') {
//         this.currentUser = res.data.user;
//         this.formGroup.patchValue(this.currentUser);
//       }
//       setTimeout(() => {
//         this.loading = false;
//       }, 1000);
//     });
//   }

//   updateUsuario() {
//     this.loading = true;

//     this.userHttpService
//       .updateUsuario(this.currentUser)
//       .subscribe((res: any) => {
//         if (res.status == 'success') {
//           this.currentUser = res.data.user;
//           this.formGroup.patchValue(this.currentUser);
//         }
//         this.loading = false;
//       });
//   }

//   provinceSelected($event: any) {
//     if ($event) {
//       this.formGroup.get('person.canton')?.reset();
//       this.formGroup.get('person.parish')?.reset();
//     }
//   }

//   cantonSelected($event: any) {
//     if ($event) {
//       this.formGroup.get('person.parish')?.reset();
//     }
//   }
}