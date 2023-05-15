import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(string: string): string {
    try {
      return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
    } catch (error) {
      return string;
    }
  }
}