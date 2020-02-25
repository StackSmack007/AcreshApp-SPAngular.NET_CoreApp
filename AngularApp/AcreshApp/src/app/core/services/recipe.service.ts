import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { recipePaths } from '../settings/apiSettings';
import { Observable } from 'rxjs';
import { IRecipeMiniInfo } from '../interfaces/recipes/recipeMiniInfo';
import { IRecipeDetails } from '../interfaces/recipeDetails';
import { HelperService } from './helper.service';
import { IRecipeCreate } from '../interfaces/IRecipeCreate';
import { IRecipeEdit } from '../interfaces/IRecipeEdit';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  getRecipes(pageNum: number, criteria: string, val: string, ): Observable<IRecipeMiniInfo[]> {
    return this.http.get<IRecipeMiniInfo[]>(recipePaths.getMinified(pageNum, criteria, val))
  }

  getPrivateRecipes(pageNum: number, criteria: string, ): Observable<IRecipeMiniInfo[]> {
    return this.http.get<IRecipeMiniInfo[]>(recipePaths.getMinifiedPrivate(pageNum, criteria))
  }

  getDetails(id: string): Observable<IRecipeDetails> {
    return this.http.get<IRecipeDetails>(recipePaths.base + id);
  }

  favUnfavRecipe(id: string): Observable<boolean> {
    return this.http.put<boolean>(recipePaths.favUnvaf, JSON.stringify(id), HelperService.appJsonHeader);
  }

  rateRecipe(id: string, score: number): Observable<any> {
    return this.http.put(recipePaths.setRating, { id, score });
  }

  nameTaken(name: string): Observable<boolean> {
    return this.http.get<boolean>(recipePaths.chkNameTaken(name))
  }


  submitRecipe(recipe: IRecipeCreate): Observable<any> {
    return this.http.post(recipePaths.base, recipe, { responseType: 'text' })
  }

  getEditDetails(id: string): Observable<IRecipeCreate> {
    return this.http.get<IRecipeCreate>(recipePaths.edit(id))
  }

  editRecipe(recipe: IRecipeEdit): Observable<any> {
    return this.http.put(recipePaths.base, recipe, { responseType: 'text' })
  }
}
