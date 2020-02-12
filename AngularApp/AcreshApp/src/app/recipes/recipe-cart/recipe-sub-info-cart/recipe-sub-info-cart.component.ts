import { Component, Input } from '@angular/core';
import { IRecipeMiniSubInfo } from 'src/app/core/interfaces/recipes/recipeMiniSubInfo';

@Component({
  selector: 'acr-recipe-sub-info',
  templateUrl: './recipe-sub-info-cart.component.html',
  styleUrls: ['./recipe-sub-info-cart.component.css']
})
export class RecipeSubInfoCartComponent {

  @Input()
  info: IRecipeMiniSubInfo;

  constructor() { }
}
