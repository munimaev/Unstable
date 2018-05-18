import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CardService } from '../card.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent implements OnInit {

  card: Card;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private cardService: CardService
  ) { }

  ngOnInit() {
    this.getCard();
  }

  getCard(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.card = this.cardService.getCard(id)
  }
  getImageName(card:Card){
    return this.cardService.getImageName(card)
  }
  getTextLines(card:Card) {
    if (!card.text) return [];
    return card.text.split('\n');
  }
  getTextLinesRus(card:Card) {
    if (!card.text) return [];
    if (card.textRus) return card.textRus.split('\n');
    return card.text.split('\n');
  }
  getName(card:Card) {
    return card.nameRus ? card.nameRus : card.name;
  }
  getNextCardId(card:Card) {
    return card.multiverseid+1 ;
  }
  addToFavorites(card:Card) {
    this.cardService.addFavoritesCard(card)
  }
  removeFromFavorites(card:Card) {
    this.cardService.removeFavoritesCard(card)
  }
  isInFavorites(card:Card): boolean {
    return this.cardService.isInFavorites(card)
  }
}
