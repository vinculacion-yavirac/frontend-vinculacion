import { Component, OnDestroy, OnInit, forwardRef } from '@angular/core';
// import { NG_VALUE_ACCESSOR, FormControl, Validators, ControlValueAccessor } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Role } from 'src/app/models/role/rol';
import { RolHttpService } from 'src/app/service/roles/rol-http.service';
import { MyErrorStateMatcher } from 'src/app/shared/matcher/error-state-matcher';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-rol.combobox',
  templateUrl: './rol.combobox.component.html',
  styleUrls: ['./rol.combobox.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RolComboboxComponent),
      multi: true,
    },
  ],
})
export class RolComboboxComponent 
  implements OnInit, OnDestroy, ControlValueAccessor
  {
    // validators
    roleFormControl = new FormControl('', [Validators.required]);
  
    //Validación de errores en el formulario
    matcher = new MyErrorStateMatcher();
  
    roles: Role[] = [];
  
    constructor(private rolHttpService: RolHttpService) {}
  
    private sub?: Subscription;
    //propiedad privada que contiene una referencia a la suscripción que se crea cuando roleFormControl cambia el valor.
    onTouchedCb?: () => void;
    writeValue(obj: any): void {
      obj && this.roleFormControl.setValue(obj.id);
    }
    //registra una función que será llamada cuando el valor de los roleFormControl cambia
    registerOnChange(fn: any): void {
      this.sub = this.roleFormControl.valueChanges.subscribe(fn);
    }
    //registra una función que será llamada cuando se toque el control. La función se almacena en la onTouchedCbpropiedad para su uso posterior
    registerOnTouched(fn: any): void {
      this.onTouchedCb = fn;
    }
    // este método se usa para habilitar o deshabilitar el control según el isDisabledState booleano pasado.
    setDisabledState?(isDisabled: boolean): void {
      isDisabled ? this.roleFormControl.disable() : this.roleFormControl.enable();
    }
  
    ngOnDestroy(): void {
      this.sub?.unsubscribe();
    }
  
    ngOnInit(): void {
      this.getRoles();
    }
  
    getRoles(): void {
      this.rolHttpService.getRoles().subscribe((res: any) => {
        if (res.status === 'success') {
          this.roles = res.data.roles;
        }
      });
    }
}
