import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardImageNameng'
})
export class CardImageNamengPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
