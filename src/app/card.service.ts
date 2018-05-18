import { Injectable } from '@angular/core';
import { Card } from './card';
import { CARDS } from './data-cards';

@Injectable()
export class CardService {
  allFavoritesCards:string[]

  constructor() {
    this.allFavoritesCards = localStorage.getItem('favoriteCards') ? localStorage.getItem('favoriteCards').split(',') : [];
  }

  getCards(): Card[] {
    return CARDS;
  }
  getFavoritesCards(): string[] {
    return this.allFavoritesCards;
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

  addFavoritesCard(card:Card): void {
    let id = String(card.multiverseid);
    if (this.allFavoritesCards.indexOf(id) === -1) {
      this.allFavoritesCards.push(id);
    }
    this.setFavorites(this.allFavoritesCards);
  }
  removeFavoritesCard(card:Card): void {
    var i1 = this.allFavoritesCards.indexOf(String(card.multiverseid),0)
    if (i1 >= 0) {
      this.allFavoritesCards.splice(i1,1);
      console.log(this.allFavoritesCards)
      this.setFavorites(this.allFavoritesCards);
    }
  }

  setFavorites(ids:any) {
    localStorage.setItem('favoriteCards', ids);
  }
  isInFavorites(card:Card): boolean {
    return !!~this.allFavoritesCards.indexOf(String(card.multiverseid));
  }
  
}
