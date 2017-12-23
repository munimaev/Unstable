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
  cardName = '';
  imageName(name) {
    var re = /\s*;\s*/;
    return name.split(/[ \,\.-]/).join('');
  }

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.getCards();
  }
  getCards(): void {
    this.allCards = this.cardService.getCards();
  }

}
