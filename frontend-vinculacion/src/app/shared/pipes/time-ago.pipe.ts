import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'TimeAgo',
})
export class TimeAgoPipe implements PipeTransform {
  transform(date: any): string {
    try {
      if (!date || !Date.parse(date)) {
        return '';
      }
      const inputDate = new Date(date);
      const now = new Date();
      const seconds = Math.floor((now.getTime() - inputDate.getTime()) / 1000);

      let interval = Math.floor(seconds / 31536000);
      if (interval >= 1) {
        return interval === 1
          ? `hace ${interval} año`
          : `hace ${interval} años`;
      }
      interval = Math.floor(seconds / 2592000);
      if (interval >= 1) {
        return interval === 1
          ? `hace ${interval} mes`
          : `hace ${interval} meses`;
      }
      interval = Math.floor(seconds / 86400);
      if (interval >= 1) {
        return interval === 1
          ? `hace ${interval} día`
          : `hace ${interval} dias`;
      }
      interval = Math.floor(seconds / 3600);
      if (interval >= 1) {
        return interval === 1
          ? `hace ${interval} hora`
          : `hace ${interval} horas`;
      }
      interval = Math.floor(seconds / 60);
      if (interval >= 1) {
        return interval === 1
          ? `hace ${interval} minuto`
          : `hace ${interval} minutos`;
      }
      return `hace ${Math.floor(seconds)} segundos`;
    } catch (error) {
      return '';
    }
  }
}