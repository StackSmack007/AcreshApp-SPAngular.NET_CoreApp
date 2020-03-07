import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IngredientService } from '../services/ingredient.service';
import { IIngredientEdit } from '../interfaces/ingredients/IIngredientEdit';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class IngredientEditResolver implements Resolve<IIngredientEdit> {
    constructor(private ingredientService: IngredientService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IIngredientEdit> {
        const id = +route.url[1].path;
        return this.ingredientService.getEditData(id);
    }
}