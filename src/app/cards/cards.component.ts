import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  allCards: Card[];
  allFavoritesCards: string[];
  onlyFav: boolean;
  cardName = '';
  imageName(name) {
    var re = /\s*;\s*/;
    return name.split(/[ \,\.-]/).join('');
  }

  constructor(private cardService: CardService) {
    this.onlyFav = localStorage.getItem('onlyFav') ? (localStorage.getItem('onlyFav') === "true" ? true : false): false;
  }

  ngOnInit() {
    this.getFavoritesCards()
    this.getCards();
  }
  getCards(): void {
    this.allCards = this.cardService.getCards();
  }
  getFavoritesCards(): void {
    this.allFavoritesCards = this.cardService.getFavoritesCards();
  }
  saveFovoriteMode(status:boolean): void {
    localStorage.setItem('onlyFav', status ? 'true' : 'false');
  }

}
