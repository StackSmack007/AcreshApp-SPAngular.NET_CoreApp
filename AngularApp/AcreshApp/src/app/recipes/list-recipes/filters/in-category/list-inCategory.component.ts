import { Component } from '@angular/core';
import { RecipeService } from 'src/app/core/services/recipe.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { IRecipeMiniInfo } from 'src/app/core/interfaces/recipes/recipeMiniInfo';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
    selector: 'acr-list-all',
    template: `<acr-list-recipes [title]="title" [loadingMethod]="loadingMethod"></acr-list-recipes>`,
})
export class ListInCategoryRComponent {
    title: string = "";
    loadingMethod: BehaviorSubject<(page: number) => Observable<IRecipeMiniInfo[]>> = null

    constructor(recipeService: RecipeService, activatedRoute: ActivatedRoute, catService: CategoryService) {
        const id = activatedRoute.snapshot.params["id"];
// debugger;
        this.loadingMethod = new BehaviorSubject(recipeService.getRecipes.bind(recipeService, "category", +id))
        catService.getDetails(+id).subscribe(det => {
            this.title = `<i class='far fa-bookmark'></i> &nbsp;Recipes In Category: ${det.name}`;
        })
    }
}
