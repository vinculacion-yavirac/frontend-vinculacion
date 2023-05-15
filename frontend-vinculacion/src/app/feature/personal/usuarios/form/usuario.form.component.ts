import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-usuario.form',
  templateUrl: './usuario.form.component.html',
  styleUrls: ['./usuario.form.component.css']
})
export class UsuarioFormComponent  {
    // // Variables de clase que son inyectadas
    // currentUser = {} as User;
  
    // title = 'Nuevo Usuario';
    
  
    // loading: boolean = true;
  
    // // Variables de clase que son inyectadas por referencia
    // matcher = new MyErrorStateMatcher();
  
    // // Variables de clase que son inyectadas por referencia
  
    // constructor(
    //   private userHttpService: UserHttpService,
    //   private router: Router,
    //   private activatedRoute: ActivatedRoute,
    //   private formBuilder: FormBuilder,
    //   private dialog: MatDialog,
    //   public formGroup: FormGroup,
    //   public paramsSubscription: Subscription,
    // ) {
    //   this.initForm();
    // }
  
    // /**
    //  * Inicializa el formulario de usuarios con los validadores y los valores por defecto.
    //  * Suscribe al formulario para detectar los cambios en los valores de los campos.
    //  */
    // initForm() {
    //   this.formGroup = this.formBuilder.group({
    //     id: [0],
    //     person: this.formBuilder.group({
    //       identification_type: ['', Validators.required],
    //       identification: [
    //         {
    //           value: '',
    //           disabled: true,
    //         },
    //         {
    //           validators: [Validators.required],
    //           asyncValidators: [
    //             (control: any) =>
    //               checkIdentificationIsAvailable(
    //                 this.userHttpService,
    //                 this.currentUser.id
    //               )(control),
    //           ],
    //           updateOn: 'change',
    //         },
    //       ],
    //       names: [
    //         '',
    //         {
    //           validators: [
    //             Validators.required,
    //             Validators.minLength(3),
    //             Validators.pattern('[A-Za-záéíóúñÁÉÍÓÚÑ ]{3,40}'),
    //           ],
    //         },
    //       ],
    //       last_names: [
    //         '',
    //         {
    //           validators: [
    //             Validators.required,
    //             Validators.minLength(3),
    //             Validators.pattern('[A-Za-záéíóúñÁÉÍÓÚÑ ]{3,40}'),
    //           ],
    //         },
    //       ],
    //     }),
    //     email: [
    //       '',
    //       {
    //         validators: [
    //           Validators.required,
    //           Validators.email,
    //           Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$'),
    //         ],
    //         asyncValidators: [
    //           (control: any) =>
    //             checkEmailIsAvailable(
    //               this.userHttpService,
    //               this.currentUser.id
    //             )(control),
    //         ],
    //         updateOn: 'change',
    //       },
    //     ],
    //     role: ['', Validators.required],
    //     active: [true, Validators.required],
    //   });
    //   this.formGroup.valueChanges.subscribe((val) => {
    //     this.currentUser = val;
    //   });
    //   this.formGroup
    //     .get('person.identification_type')
    //     ?.valueChanges.subscribe((identificationType) => {
    //       this.formGroup.get('person.identification')?.enable();
  
    //       const identificationControl = this.formGroup.get(
    //         'person.identification'
    //       );
  
    //       if (normalize(identificationType) === 'cedula') {
    //         identificationControl?.setValidators([
    //           Validators.required,
    //           Validators.minLength(10),
    //           Validators.maxLength(10),
    //         ]);
    //         identificationControl?.setAsyncValidators([
    //           udvEcIdentification(),
    //           (control: any) =>
    //             checkIdentificationIsAvailable(
    //               this.userHttpService,
    //               this.currentUser.id
    //             )(control),
    //         ]);
    //       } else {
    //         identificationControl?.clearValidators();
    //         identificationControl?.setValidators([Validators.required]);
    //         identificationControl?.clearAsyncValidators();
    //         identificationControl?.setAsyncValidators([
    //           (control: any) =>
    //             checkIdentificationIsAvailable(
    //               this.userHttpService,
    //               this.currentUser.id
    //             )(control),
    //         ]);
    //       }
    //       identificationControl?.updateValueAndValidity();
    //     });
    // }
  
    // ngOnInit(): void {
    //   this.paramsSubscription = this.activatedRoute.params.subscribe(
    //     (params: Params) => {
    //       if (params['id']) {
    //         this.title = 'Editar usuario';
    //         this.getUsuario(params['id']);
    //       } else {
    //         setTimeout(() => {
    //           this.loading = false;
    //         }, 1000);
    //       }
    //     }
    //   );
    // }
  
    // ngOnDestroy(): void {
    //   this.paramsSubscription.unsubscribe();
    // }
  
    // /**
    //  * Valida el formulario antes de enviarlo. Si el formulario es válido, determina si se trata de
    //  * un nuevo usuario o una actualización existente y llama a la función correspondiente.
    //  */
    // public onSubmit(): void {
    //   if (this.formGroup.valid) {
    //     if (!this.currentUser.id) {
    //       this.createUser();
    //     } else {
    //       this.updateUsuario();
    //     }
    //   }
    // }
  
    // // método para obtener todos los usuarios
    // public getUsuario(id: number) {
    //   this.loading = true;
  
    //   this.userHttpService.getUsuario(id).subscribe((res: any) => {
    //     if (res.status === 'success') {
    //       this.currentUser = res.data.user;
    //       console.log(this.currentUser);
    //       this.formGroup.patchValue(this.currentUser);
    //     }
    //     setTimeout(() => {
    //       this.loading = false;
    //     }, 1000);
    //   });
    // }
  
    // //método para crear un usuario nuevo
    // public createUser() {
    //   this.currentUser.password = this.generateSecurePassword();
    //   this.userHttpService.addUsuario(this.currentUser).subscribe((res: any) => {
    //     if (res.status === 'success') {
    //       this.sendEmailCredentials(this.currentUser);
    //       this.router.navigate(['/system/personal/usuarios/list']);
    //     }
    //   });
    // }
  
    // //método para actualizar un usuario existente
    // public updateUsuario() {
    //   this.userHttpService
    //     .updateUsuario(this.currentUser)
    //     .subscribe((res: any) => {
    //       if (res.status === 'success') {
    //         this.router.navigate(['system/personal/usuarios/list']);
    //       }
    //     });
    // }
  
    // //método para generar una contraseña aleatoria para el usuario
    // generateSecurePassword(): string {
    //   const password = cryptoJs.lib.WordArray.random(14).toString();
    //   return password;
    // }
  
    // //método para generar nueva contraseña para el usuario
    // generateNewPassword() {
    //   this.currentUser.password = this.generateSecurePassword();
    //   let password = {
    //     password: this.currentUser.password,
    //   };
    //   this.userHttpService
    //     .updatePassword(password, this.currentUser.id)
    //     .subscribe((res: any) => {
    //       if (res.status === 'success') {
    //         console.log(res.status);
    //         this.sendEmailCredentials(this.currentUser);
    //       }
    //     });
    // }
  
    // sendEmailCredentials(user: User) {
    //   this.userHttpService.sendEmailCredentials(user).subscribe();
    // }
  
    // archiveUsuario(usuario: User): void {
    //   this.userHttpService.archiveUsuario(usuario.id).subscribe((res: any) => {
    //     if (res.status === 'success') {
    //       this.router.navigate(['system/personal/usuarios/list']);
    //     }
    //   });
    // }
  
    // openDialogArchiveUsuario(usuario: User): void {
    //   window.scrollTo(0, 0);
    //   const dialogRef = this.dialog.open(ModalAlertComponent, {
    //     height: '320px',
    //     width: '600px',
    //     data: {
    //       title: '¿Está seguro de eliminar el usuario?',
    //       message: 'El usuario será eliminado y no podrá ser recuperado',
    //       dato: usuario.email,
    //       button: 'Eliminar',
    //     },
    //   });
  
    //   dialogRef.afterClosed().subscribe((result) => {
    //     if (result) {
    //       this.archiveUsuario(usuario);
    //     }
    //   });
    // }
  
    // //método para habilitar o deshabilitar el campo de identificación
    // enableIdentification() {
    //   console.log('enableIdentification');
    //   if (!this.currentUser.person) {
    //     this.formGroup.get('person')?.get('identification')?.disable();
    //   } else {
    //     this.formGroup.get('person')?.get('identification')?.enable();
    //   }
    // }
}
