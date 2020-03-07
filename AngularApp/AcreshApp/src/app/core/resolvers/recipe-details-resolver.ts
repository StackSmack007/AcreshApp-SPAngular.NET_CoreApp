import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IRecipeDetails } from '../interfaces/recipes/RecipeDetails';
import { RecipeService } from '../services/recipe.service';


@Injectable({
    providedIn: 'root'
})
export class RecipeDetailsResolver implements Resolve<IRecipeDetails> {
    constructor(private recipeService: RecipeService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IRecipeDetails> {
        var id = route.paramMap.get('id');
        return this.recipeService.getDetails(id);
    }
}



