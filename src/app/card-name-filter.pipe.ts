import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardNameFilter'
})
export class CardNameFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value)
    console.log(args)
    if (!value || !args) {
        return value;
    }
    return value.filter(card => card.name.toUpperCase().indexOf(args.toUpperCase()) !== -1);
  }
}
