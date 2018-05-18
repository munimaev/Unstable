import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { CardsComponent } from './cards/cards.component';
import { CardNameFilterPipe } from './card-name-filter.pipe';
import { CardImageNamengPipe } from './card-image-nameng.pipe';
import { AppRoutingModule } from './/app-routing.module';
import { TranslateComponent } from './translate/translate.component';
import { CardService } from './card.service';
import { FavoritesComponent } from './favorites/favorites.component';
import { OnlyFavoritesCardPipe } from './only-favorites-card.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    CardsComponent,
    CardNameFilterPipe,
    CardImageNamengPipe,
    TranslateComponent,
    FavoritesComponent,
    OnlyFavoritesCardPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
