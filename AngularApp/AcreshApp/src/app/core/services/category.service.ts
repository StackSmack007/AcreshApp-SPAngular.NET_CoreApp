import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { categoryPaths } from '../settings/apiSettings';
import { ICategoryOption } from '../interfaces/categories/ICategoryOption';


@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    constructor(private http: HttpClient) {
    }

    getAllMini(): Observable<ICategoryOption[]> {
        return this.http.get<ICategoryOption[]>(categoryPaths.getAllMini);
    }
}


