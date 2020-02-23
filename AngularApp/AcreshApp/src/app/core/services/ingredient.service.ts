import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ignredientPaths } from '../settings/apiSettings';
import { IIngredientMini } from '../interfaces/categories/IIngredientMini';

@Injectable({
    providedIn: 'root'
})
export class IngredientService {
    constructor(private http: HttpClient) {
    }

    getAllMini(): Observable<IIngredientMini[]> {
        return this.http.get<IIngredientMini[]>(ignredientPaths.getAllMini);
    }
}
