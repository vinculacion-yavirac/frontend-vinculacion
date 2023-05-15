import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/**
 * Clase personalizada para manejar el estado de error en los controles del formulario
 * Implementa la interfaz ErrorStateMatcher de Angular para personalizar el comportamiento de las validaciones en el formulario.
 */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  /**
   * Verifica si el control actual se encuentra en un estado de error
   * @param control FormControl actual
   * @param form FormGroupDirective o NgForm actual
   * @returns true si el control es inválido y ha sido modificado, tocado o el formulario ha sido enviado
   */
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}