import { Component, Input } from '@angular/core';
import { IRecipeMiniSubInfo } from 'src/app/core/interfaces/recipes/recipeMiniSubInfo';

@Component({
  selector: 'acr-recipe-sub-info',
  templateUrl: './recipe-sub-info-card.component.html',
  styleUrls: ['./recipe-sub-info-card.component.css']
})
export class RecipeSubInfoCardComponent {

  @Input()
  info: IRecipeMiniSubInfo;

  constructor() { }
}
