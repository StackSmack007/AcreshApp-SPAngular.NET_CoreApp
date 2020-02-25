import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { categoryPaths } from '../settings/apiSettings';
import { ICategoryMini } from '../interfaces/categories/ICategoryMini';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    constructor(private http: HttpClient) {
    }

    getAllMini(): Observable<ICategoryMini[]> {
        return this.http.get<ICategoryMini[]>(categoryPaths.getAllMini);
    }
}


