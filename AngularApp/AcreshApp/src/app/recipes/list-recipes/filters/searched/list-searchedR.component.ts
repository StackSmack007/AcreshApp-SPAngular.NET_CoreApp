import { Observable, BehaviorSubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { RecipeService } from 'src/app/core/services/recipe.service';
import { IRecipeMiniInfo } from 'src/app/core/interfaces/recipes/recipeMiniInfo';

@Component({
    selector: 'acr-list-all',
    template: `<acr-list-recipes [title]="title" [loadingMethod]="loadingMethod"></acr-list-recipes>`,
})
export class ListSearchedRComponent {
    title: string;
    loadingMethod: BehaviorSubject<(page: number) => Observable<IRecipeMiniInfo[]>> = null

    constructor(recipeService: RecipeService, route: ActivatedRoute) {
        route.params.subscribe(({ phrase }) => {
            this.title = `<i class='fas fa-search'></i>&nbsp; Results Of Search for...<span class="text-info font-italic">"${phrase}"</span>`
            let method = recipeService.getRecipes.bind(recipeService, "search", phrase);
            if (this.loadingMethod === null) {
                this.loadingMethod = new BehaviorSubject(method)
            } else {
                this.loadingMethod.next(method);
            }
        });
    }
}
