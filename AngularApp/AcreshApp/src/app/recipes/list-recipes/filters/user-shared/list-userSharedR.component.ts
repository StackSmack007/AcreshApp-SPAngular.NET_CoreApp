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
export class ListUserSharedRComponent {
    title: string;
    loadingMethod: BehaviorSubject<(page: number) => Observable<IRecipeMiniInfo[]>> = null

    constructor(recipeService: RecipeService, route: ActivatedRoute, authService: AuthService) {
        const userName: string = route.snapshot.params["username"];
        this.loadingMethod = new BehaviorSubject(recipeService.getRecipes.bind(recipeService, "user", userName))
        this.title = (authService.isAuthenticated() && authService.getUserInfo().userName.toLowerCase() === userName.toLowerCase())
                                                                ? `<i class='fas fa-share-alt'></i></i>&nbsp; My Shared Recipes...`
                                                                : `<i class='fas fa-user'></i></i>&nbsp; ${userName}'s Recipes...`;
    }
}