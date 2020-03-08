import { Component } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { RecipeService } from 'src/app/core/services/recipe.service';
import { IRecipeMiniInfo } from 'src/app/core/interfaces/recipes/recipeMiniInfo';

@Component({
    selector: 'acr-list-all',
    template: `<acr-list-recipes [title]="title" [loadingMethod]="loadingMethod"></acr-list-recipes>`,
})
export class ListMyFavouriteRComponent {
    title = "<i class='far fa-heart'></i>&nbsp; My Favourite Recipes...";
    loadingMethod: BehaviorSubject<(page: number) => Observable<IRecipeMiniInfo[]>> = null

    constructor(recipeService: RecipeService) {
        this.loadingMethod = new BehaviorSubject(recipeService.getPrivateRecipes.bind(recipeService, "my-favourite"))
    }
}