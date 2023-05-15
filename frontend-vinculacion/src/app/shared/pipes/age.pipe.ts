import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Age',
})
export class AgePipe implements PipeTransform {
  transform(dateOfBirth: any): number {
    if (!dateOfBirth || !Date.parse(dateOfBirth)) {
      return 0;
    }
    const birthDate = new Date(dateOfBirth);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
}