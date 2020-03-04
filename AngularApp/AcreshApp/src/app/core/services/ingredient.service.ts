import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ignredientPaths } from '../settings/apiSettings';
import { IIngredientMini } from '../interfaces/categories/IIngredientMini';
import { IIngredientCard } from '../interfaces/ingredients/IIngredient-card';
import { IRecipeIngredient } from '../interfaces/recipes/RecipeIngredient';
import { IIngredeintMatches } from '../interfaces/ingredients/IIngredeintMatches';

@Injectable({
    providedIn: 'root'
})
export class IngredientService {
    constructor(private http: HttpClient) {
    }

    getAllMini(): Observable<IIngredientMini[]> {
        return this.http.get<IIngredientMini[]>(ignredientPaths.getAllMini);
    }

    getRecipeIngredients(recipeId: string): Observable<IRecipeIngredient[]> {
        return this.http.get<IRecipeIngredient[]>(ignredientPaths.getRecipeIngredients(recipeId));
    }


    private getCards(page: number, index: string, phrase: string, essential: boolean = false): Observable<IIngredientCard[]> {
        return this.http.get<IIngredientCard[]>(ignredientPaths.getCards(page, index, phrase, essential));
    }

    getCardsMaxCount({ index, phrase }): Observable<IIngredeintMatches> {
        return this.http.get<IIngredeintMatches>(ignredientPaths.getCardsTotalCount(index, phrase))
    }

    getEssentialCards(page: number, index: string, phrase: string): Observable<IIngredientCard[]> { return this.getCards(page, index, phrase) }
    getNonEssentialCards(page: number, index: string, phrase: string): Observable<IIngredientCard[]> { return this.getCards(page, index, phrase, true) }
}



