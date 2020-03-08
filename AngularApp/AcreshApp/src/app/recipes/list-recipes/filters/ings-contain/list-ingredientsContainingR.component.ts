import { Component } from '@angular/core';
import { RecipeService } from 'src/app/core/services/recipe.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { IRecipeMiniInfo } from 'src/app/core/interfaces/recipes/recipeMiniInfo';
import { ActivatedRoute } from '@angular/router';
import { IngredientService } from 'src/app/core/services/ingredient.service';

@Component({
    selector: 'acr-list-all',
    template: `<acr-list-recipes [title]="title" [loadingMethod]="loadingMethod"></acr-list-recipes>`,
})
export class ListIngredientsContainingRComponent {
    title = "<i class='fas fa-flask'></i> &nbsp; Recipes Containing Ingredients";
    loadingMethod: BehaviorSubject<(page: number) => Observable<IRecipeMiniInfo[]>> = null
    constructor(recipeService: RecipeService, route: ActivatedRoute, ingredientService: IngredientService) {
        const ingIds = route.snapshot.params["ingids"];
        this.loadingMethod = new BehaviorSubject(recipeService.getRecipes.bind(recipeService, "ingredients", ingIds))

        ingredientService.getIngredientNames(ingIds).subscribe(x => {
            debugger;
            this.title +=': '+ x.join(", ");
        })


    }
}
