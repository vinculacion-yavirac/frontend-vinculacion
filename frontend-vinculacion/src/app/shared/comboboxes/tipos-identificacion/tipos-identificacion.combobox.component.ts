import { Component, OnDestroy, OnInit, forwardRef } from '@angular/core';

import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';

import { Subscription } from 'rxjs';
import { identificacion } from 'src/app/models/data/identificacion';

@Component({
  selector: 'combobox-identification-types',
  templateUrl: './tipos-identificacion.combobox.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => IdentificationTypesComboboxComponent),
      multi: true,
    },
  ],
})
export class IdentificationTypesComboboxComponent
  implements OnInit, OnDestroy, ControlValueAccessor
{
  identificationTypeFormControl = new FormControl('', [Validators.required]);

  identificationTypes: any[] = identificacion;

  private sub?: Subscription;
  onTouchedCb?: () => void;

  constructor() {}

  writeValue(obj: any): void {
    obj && this.identificationTypeFormControl.setValue(obj);
  }

  registerOnChange(fn: any): void {
    this.sub = this.identificationTypeFormControl.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCb = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled
      ? this.identificationTypeFormControl.disable()
      : this.identificationTypeFormControl.enable();
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  ngOnInit(): void {
     this.IsDisabled();
  }

  IsDisabled(): void {
    if (
      this.identificationTypes == null ||
      this.identificationTypes.length == 0
    ) {
      this.identificationTypeFormControl.disable();
    }
  }
}