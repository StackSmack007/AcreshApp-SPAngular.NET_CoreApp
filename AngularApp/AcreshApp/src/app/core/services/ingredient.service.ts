import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ignredientPaths } from '../settings/apiSettings';
import { IIngredientMini } from '../interfaces/categories/IIngredientMini';
import { IIngredientCard, IIngredientDetails } from '../interfaces/ingredients/IIngredient-card';
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
    }П
    
    getRecipeIngredients(recipeId: string): Observable<IRecipeIngredient[]> {
        return this.http.get<IRecipeIngredient[]>(ignredientPaths.getRecipeIngredients(recipeId));
    }

    getIngredientDetails(id: number): Observable<IIngredientDetails> {
        return this.http.get<IIngredientDetails>(ignredientPaths.getDetails(id))
    }

    getCardsMaxCount({ index, phrase }): Observable<IIngredeintMatches> {
        return this.http.get<IIngredeintMatches>(ignredientPaths.getCardsTotalCount(index, phrase))
    }

    nameTaken(name:string):Observable<boolean> {
//TODO implement in api...

        return this.http.get<boolean>(ignredientPaths.chkNameTaken(name))
    }
    
    getEssentialIngCards(page: number, index: string, phrase: string): Observable<IIngredientCard[]> { return this.getCards(page, index, phrase, true) }
    getNonEssentialIngsCards(page: number, index: string, phrase: string): Observable<IIngredientCard[]> { return this.getCards(page, index, phrase) }
    private getCards(page: number, index: string, phrase: string, essential: boolean = false): Observable<IIngredientCard[]> {
        return this.http.get<IIngredientCard[]>(ignredientPaths.getCards(page, index, phrase, essential));
    }
}



