import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'acr-create-ingredient',
  templateUrl: './create-ingredient.component.html',
  styleUrls: ['./create-ingredient.component.css']
})
export class CreateIngredientComponent implements OnInit {

 // settings: { headline: "Create New Ingredient", submitBtnTitle: "Create" };
  settings={ headline: "Create New Ingredient", submitBtnTitle: "Post This Ingredient" };
  constructor() { }

  ngOnInit(): void {
  }

}
