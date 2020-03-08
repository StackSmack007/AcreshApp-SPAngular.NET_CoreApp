import { Component } from '@angular/core';
import { RecipeService } from 'src/app/core/services/recipe.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { IRecipeMiniInfo } from 'src/app/core/interfaces/recipes/recipeMiniInfo';

@Component({
  selector: 'acr-list-all',
  template: `<acr-list-recipes [title]="title" [loadingMethod]="loadingMethod"></acr-list-recipes>`,
})
export class ListAllRComponent {

  title = "<i class='fas fa-scroll'></i>&nbsp; All Recipes...";
  loadingMethod: BehaviorSubject<(page: number) => Observable<IRecipeMiniInfo[]>> = null

  constructor(recipeService: RecipeService) {
    this.loadingMethod = new BehaviorSubject(recipeService.getRecipes.bind(recipeService, "all", undefined))
  }

}
