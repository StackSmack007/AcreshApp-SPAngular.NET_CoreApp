import { Component } from '@angular/core';
import { RecipeService } from 'src/app/core/services/recipe.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { IRecipeMiniInfo } from 'src/app/core/interfaces/recipes/recipeMiniInfo';

@Component({
    selector: 'acr-list-all',
    template: `<acr-list-recipes [title]="title" [loadingMethod]="loadingMethod"></acr-list-recipes>`,
})
export class ListCommentedRecentlyRComponent {
    title = "<i class='far fa-clock'></i>&nbsp; Recently Commented Recipes...";
    loadingMethod: BehaviorSubject<(page: number) => Observable<IRecipeMiniInfo[]>> = null

    constructor(recipeService: RecipeService) {
        this.loadingMethod =new BehaviorSubject(recipeService.getRecipes.bind(recipeService, "commented-recently", undefined))
    }
}
