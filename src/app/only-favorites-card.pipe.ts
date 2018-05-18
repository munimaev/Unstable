import { Pipe, PipeTransform } from '@angular/core';
import { CardService } from './card.service';

@Pipe({
  name: 'onlyFavoritesCard'
})
export class OnlyFavoritesCardPipe implements PipeTransform {
  constructor(private cardService: CardService) {

  }

  transform(value: any, args?: any): any {
    if (args) {
      let ids = this.cardService.getFavoritesCards()
      return  value.filter(card=>{
        return ids.indexOf(String(card.multiverseid)) >= 0;
      })
    }
    return value;
  }

}
