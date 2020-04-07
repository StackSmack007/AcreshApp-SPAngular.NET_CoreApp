import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { uploadPaths, basePath } from '../settings/apiSettings';
import { map } from 'rxjs/operators';

function generatePicName(fileName: string) {
    return `static_` +
        'xxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16)
        }) + `${fileName}`;
}

@Injectable({
    providedIn: 'root'
})
export class UploadService {
    constructor(private http: HttpClient) { }
    uploadAvImg(file: File): Observable<string> {
        let fd = new FormData();
        fd.append("avatar-pic", file, generatePicName(file.name))
        console.log(fd,file);
        return this.http.post<{ bdPath: string }>(uploadPaths.avatarImg, fd)
            .pipe(map(x => {
                return basePath + x.bdPath
            }))
    };
}