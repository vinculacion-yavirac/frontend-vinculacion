import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'NameInitials',
})
export class NameInitialsPipe implements PipeTransform {
  transform(user: any): string {
    try {
      if (!user || !user.names || !user.last_names) {
        throw new Error('Invalid user object');
      }
      return `${user.names.split(' ')[0][0].toUpperCase()}${user.last_names
        .split(' ')[0][0]
        .toUpperCase()}`;
    } catch (error) {
      return '';
    }
  }
}