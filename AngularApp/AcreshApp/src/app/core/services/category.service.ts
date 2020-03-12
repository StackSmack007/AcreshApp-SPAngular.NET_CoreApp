import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { categoryPaths } from '../settings/apiSettings';
import { ICategoryOption } from '../interfaces/categories/ICategoryOption';
import { CategoryNode } from '../interfaces/categories/CategoryNode';
import { ICategoryDetails } from '../interfaces/categories/ICategoryDetails';


@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    constructor(private http: HttpClient) {
    }
    
    getAllMini(): Observable<ICategoryOption[]> {
        return this.http.get<ICategoryOption[]>(categoryPaths.getAllMini);
    }
    
    getThreeStructure(): Observable<ICategoryOption[]> {
        return this.http.get<ICategoryOption[]>(categoryPaths.getThreeStructure);
    }
    
    getDetails(id: number): Observable<ICategoryDetails> {
     return this.http.get<ICategoryDetails>(categoryPaths.getDetails(id))
    }
}


