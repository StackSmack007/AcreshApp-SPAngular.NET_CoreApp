import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { IIngredientCard } from 'src/app/core/interfaces/ingredients/IIngredient-card';

@Component({
  selector: 'acr-ingredient-card',
  templateUrl: './ingredient-card.component.html',
  styleUrls: ['./ingredient-card.component.css']
})
export class IngredientCartComponent implements OnInit {

  @Output()
  loadIngrEvent: EventEmitter<number> = new EventEmitter<number>();

  @Input()
  selectedId: number;

  get isChosen() { return this.selectedId === this.ingredient.id; }


  @Input()
  ingredient: IIngredientCard = {
    id: 12,
    name: "Kanela",
    picURL: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200",
    usage: 123,
    isVegan: false,
    origin: "Plant",
    lastEdited: 234343,
    authorUserName: "User1215"
  }

  constructor() { }

  ngOnInit(): void {
  }

  loadIngredientInfo() {
    console.log("ing123");
    if (this.isChosen) return;
    this.loadIngrEvent.emit(this.ingredient.id);
  }


}
