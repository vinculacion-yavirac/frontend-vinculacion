import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'NamesSurnamesComplete',
})
export class NamesSurnamesCompletePipe implements PipeTransform {
  transform(user: any): string {
    try {
      if (!user || !user.names || !user.last_names) {
        throw new Error('Invalid user object');
      }
      return `${user.names.toUpperCase()} ${user.last_names.toUpperCase()}`;
    } catch (error) {
      return '';
    }
  }
}