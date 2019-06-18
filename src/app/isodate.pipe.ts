import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isodate'
})
export class IsodatePipe implements PipeTransform {

  transform(value: Date): any {
    console.log('por aqui');
    return value.toISOString();
  }

}
