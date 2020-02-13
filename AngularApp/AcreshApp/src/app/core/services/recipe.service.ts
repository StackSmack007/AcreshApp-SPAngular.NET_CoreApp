import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { recipePaths } from '../settings/apiSettings';
import { Observable } from 'rxjs';
import { IRecipeMiniInfo } from '../interfaces/recipes/recipeMiniInfo';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  getRecipes(criteria: string, pageNum: number): Observable<IRecipeMiniInfo[]> {
    return this.http.get<IRecipeMiniInfo[]>(recipePaths.getMinified(criteria, pageNum))
  }
}
