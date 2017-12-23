import { Injectable } from '@angular/core';
import { Card } from './card';
import { CARDS } from './data-cards';

@Injectable()
export class CardService {

  constructor() { }

  getCards(): Card[] {
    return CARDS;
  }
  getCard(id:number): Card {
    var result = null;
    CARDS.some(card => {
      if (card.multiverseid == id) {
        result = card;
        return true;
      }
    });
    return result;
  }
  getImageName(card:Card){
    var re = /\s*;\s*/;
    return card.imageName.split(/[ \,\.-]/).join('');
  }
}
