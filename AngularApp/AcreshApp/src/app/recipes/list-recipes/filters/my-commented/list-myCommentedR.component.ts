import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { RecipeService } from 'src/app/core/services/recipe.service';
import { IRecipeMiniInfo } from 'src/app/core/interfaces/recipes/recipeMiniInfo';

@Component({
    selector: 'acr-list-all',
    template: `<acr-list-recipes [title]="title" [loadingMethod]="loadingMethod"></acr-list-recipes>`,
})
export class ListMyCommentedRComponent {
    title = "<i class='far fa-comment-alt'></i>&nbsp; My Commented Recipes...";
    loadingMethod: BehaviorSubject<(page: number) => Observable<IRecipeMiniInfo[]>> = null

    constructor(recipeService: RecipeService) {
        this.loadingMethod = new BehaviorSubject(recipeService.getPrivateRecipes.bind(recipeService, "my-commented"))
    }
}