import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent }      from './cards/cards.component';
import { TranslateComponent }      from './translate/translate.component';

const routes: Routes = [
  { path: '', component: CardsComponent },
  { path: 'translate/:id', component: TranslateComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
