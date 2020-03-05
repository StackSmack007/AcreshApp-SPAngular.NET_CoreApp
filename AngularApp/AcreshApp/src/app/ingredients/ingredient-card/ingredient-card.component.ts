import { Component, Input, AfterViewInit } from '@angular/core';
import { IIngredientCard } from 'src/app/core/interfaces/ingredients/IIngredient-card';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'acr-ingredient-card',
  templateUrl: './ingredient-card.component.html',
  styleUrls: ['./ingredient-card.component.css']
})
export class IngredientCartComponent implements AfterViewInit {
  @Input()
  ingrIdSelected: BehaviorSubject<number>;

  isChosen = false;

  @Input()
  ingredient: IIngredientCard = {
    id: 12,
    name: "Kanela",
    picUrl: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200",
    usageCount: 123,
    isVegan: false,
    origin: "Plant",
    authorUserName: "User1215",
  }

  constructor() {  }

  ngAfterViewInit(): void {
    this.ingrIdSelected.subscribe(id => {
      this.isChosen = id === this.ingredient.id;
    })
  }

  loadIngredientInfo() {
    this.ingrIdSelected.next(this.ingredient.id);
  }
}