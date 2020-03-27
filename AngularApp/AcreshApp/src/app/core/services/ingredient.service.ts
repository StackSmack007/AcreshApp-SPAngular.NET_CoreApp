import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ignredientPaths } from '../settings/apiSettings';
import { IRecipeIngredient } from '../interfaces/recipes/RecipeIngredient';
import { IIngredientCard } from '../interfaces/ingredients/IIngredient-card';
import { IIngredientOption } from '../interfaces/ingredients/IIngredientOption';
import { IIngredientCreate } from '../interfaces/ingredients/IIngredientCreate';
import { IIngredientDetails } from "../interfaces/ingredients/IIngredientDetails";
import { IIngredeintMatches } from '../interfaces/ingredients/IIngredeintMatches';
import { IIngredientEdit } from '../interfaces/ingredients/IIngredientEdit';

@Injectable({
    providedIn: 'root'
})
export class IngredientService {
    constructor(private http: HttpClient) {
    }

    getAllMini(): Observable<IIngredientOption[]> {
        return this.http.get<IIngredientOption[]>(ignredientPaths.getAllMini);
    }

    getRecipeIngredients(recipeId: string): Observable<IRecipeIngredient[]> {
        return this.http.get<IRecipeIngredient[]>(ignredientPaths.getRecipeIngredients(recipeId));
    }

    getIngredientDetails(id: number): Observable<IIngredientDetails> {
        return this.http.get<IIngredientDetails>(ignredientPaths.getDetails(id))
    }

    getCardsMaxCount({ index, phrase }): Observable<IIngredeintMatches> {
        return this.http.get<IIngredeintMatches>(ignredientPaths.getCardsTotalCount(index, phrase))
    }

    nameTaken(name: string): Observable<boolean> {
        return this.http.get<boolean>(ignredientPaths.chkNameTaken(name))
    }

    getEssentialIngCards(page: number, index: string, phrase: string): Observable<IIngredientCard[]> { return this.getCards(page, index, phrase, true) }
    getNonEssentialIngsCards(page: number, index: string, phrase: string): Observable<IIngredientCard[]> { return this.getCards(page, index, phrase) }
    private getCards(page: number, index: string, phrase: string, essential: boolean = false): Observable<IIngredientCard[]> {
        debugger;
        console.log(ignredientPaths.getCards(page, index, phrase, essential));
        return this.http.get<IIngredientCard[]>(ignredientPaths.getCards(page, index, phrase, essential));
    }

    getEditDataById(id: number): Observable<IIngredientEdit> {
        return this.http.get<IIngredientEdit>(ignredientPaths.editGet(id))
    }

    createIngredient(value: IIngredientCreate): Observable<number> {
        return this.http.post<number>(ignredientPaths.base, value)
    }

    editIngredient(editValue: IIngredientEdit): Observable<number> {
        return this.http.put<number>(ignredientPaths.base, editValue);
    }

    getIngredientNames(ids: string): Observable<string[]> {
        return this.http.get<string[]>(ignredientPaths.getNamesByIds(ids));
    }

    deleteIngredientById(id: number): Observable<any> {
        return this.http.delete<any>(ignredientPaths.delete(id));
    }
}