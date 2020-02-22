import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ignridientPaths } from '../settings/apiSettings';
import { IIngridientMini } from '../interfaces/categories/IIngridientMini';

@Injectable({
    providedIn: 'root'
})
export class IngridientService {
    constructor(private http: HttpClient) {
    }

    getAllMini(): Observable<IIngridientMini[]> {
        return this.http.get<IIngridientMini[]>(ignridientPaths.getAllMini);
    }
}

