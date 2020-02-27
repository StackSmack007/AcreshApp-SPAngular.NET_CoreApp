import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { commentsPaths } from '../settings/apiSettings';
import { IComment } from '../interfaces/comments/IComment';

@Injectable({
    providedIn: 'root'
})
export class CommentsService {
    constructor(private http: HttpClient) {
    }

    getCommentsForRecipe(pageNum:number,recipeId: string): Observable<IComment[]> {
        return this.http.get<IComment[]>(commentsPaths.getAllForRecipe(pageNum,recipeId));
    }

    postComment(comment): Observable<number> {//Returns id of newly created comment or Bad Request
        return this.http.post<number>(commentsPaths.base,comment);
    }
}