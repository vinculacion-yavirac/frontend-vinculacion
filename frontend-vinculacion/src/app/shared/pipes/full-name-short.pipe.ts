import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FullNameShort',
})
export class FullNameShortPipe implements PipeTransform {
  transform(user: any): string {
    try {
      if (!user || !user.names || !user.last_names) {
        throw new Error('Invalid user object');
      }
      return `${
        user.names.split(' ')[0].charAt(0).toUpperCase() +
        user.names.split(' ')[0].slice(1)
      } ${user.last_names.split(' ')[0][0].toUpperCase()}.`;
    } catch (error) {
      return '';
    }
  }
}