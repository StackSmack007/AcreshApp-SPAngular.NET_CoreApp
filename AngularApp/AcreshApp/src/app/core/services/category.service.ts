import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { categoryPaths } from '../settings/apiSettings';
import { ICategoryOption } from '../interfaces/categories/ICategoryOption';
import { ICategoryDetails } from '../interfaces/categories/ICategoryDetails';
import { ICategoryCreate } from '../interfaces/categories/ICategoryCreate';

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

    nameTaken(name: string): Observable<boolean> {
        return this.http.get<boolean>(categoryPaths.nameUsed(name))
    }

    create(v: ICategoryCreate): Observable<number> {
        return this.http.post<number>(categoryPaths.base, v);
    }
    
    deleteCategoryById(id: number): Observable<any> {
        return this.http.delete(categoryPaths.delete(id));
    }
}