import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RecipeService } from '../services/recipe.service';
import { IRecipeCreate } from '../interfaces/recipes/IRecipeCreate';


@Injectable({
    providedIn: 'root'
})
export class RecipeEditDataResolver implements Resolve<IRecipeCreate> {
    constructor(private recipeService: RecipeService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IRecipeCreate> {
        var id = route.paramMap.get('id');
        return this.recipeService.getEditDetails(id);
    }
}