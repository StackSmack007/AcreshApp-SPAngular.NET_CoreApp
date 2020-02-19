import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { recipePaths } from '../settings/apiSettings';
import { Observable } from 'rxjs';
import { IRecipeMiniInfo } from '../interfaces/recipes/recipeMiniInfo';
import { IRecipeDetails } from '../interfaces/recipeDetails';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  getRecipes(pageNum: number, criteria: string, val: string, ): Observable<IRecipeMiniInfo[]> {
    return this.http.get<IRecipeMiniInfo[]>(recipePaths.getMinified( pageNum,criteria, val))
  }

  getPrivateRecipes(pageNum: number, criteria: string, ): Observable<IRecipeMiniInfo[]> {
    return this.http.get<IRecipeMiniInfo[]>(recipePaths.getMinifiedPrivate( pageNum,criteria))
  }

  getDetails(id:string): Observable<IRecipeDetails> {
    return this.http.get<IRecipeDetails>(recipePaths.base+id);
  }

  favUnfavRecipe(id): Observable<boolean> {
    return this.http.put<boolean>(recipePaths.favUnvaf,JSON.stringify(id),HelperService.appJsonHeader);
  }
}
