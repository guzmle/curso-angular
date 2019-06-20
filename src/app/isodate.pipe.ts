import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isodate'
})
export class IsodatePipe implements PipeTransform {

  transform(value: Date): any {
    return typeof value !== 'string' ? value.toISOString() : value;
  }

}
