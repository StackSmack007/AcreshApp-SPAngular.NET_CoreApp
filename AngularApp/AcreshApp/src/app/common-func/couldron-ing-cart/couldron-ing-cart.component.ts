import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICauldronIngredient } from 'src/app/core/interfaces/ingredients/ICauldronIngredient';

@Component({
  selector: 'acr-couldron-ing-cart',
  templateUrl: './couldron-ing-cart.component.html',
  styleUrls: ['./couldron-ing-cart.component.css'],
})
export class CouldronIngCartComponent {

  @Input()
  ingredient: ICauldronIngredient = {
    name: "Beans",
    id: 12,
    picUrl: "https://article.images.consumerreports.org/f_auto/prod/content/dam/CRO%20Images%202018/Health/September/CR-Health-InlineHero-Benefits-of-Beans-09-18"
  }

  @Input() //if deletable then not chosable and vice versa!
  isDeletable = false;

  @Output()
  chooseEvent: EventEmitter<number> = new EventEmitter();

  @Output()
  removeEvent: EventEmitter<number> = new EventEmitter();

  constructor() { }

  choose() { this.chooseEvent.emit(this.ingredient.id); }

  remove() { this.removeEvent.emit(this.ingredient.id); }
}