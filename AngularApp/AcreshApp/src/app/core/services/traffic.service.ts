import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { trafficPaths, basePath } from '../settings/apiSettings';
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
export class TrafficService {
    constructor(private http: HttpClient) { }
    upload(file: File): Observable<string> {
        let fd = new FormData();
        fd.append("avatar-pic", file, generatePicName(file.name))
        console.log(fd, file);
        return this.http.post<{ bdPath: string }>(trafficPaths.avatarImg, fd)
        .pipe(map(x => {
            return basePath + x.bdPath
        }))
    };
    
    public download(fileName: string): Observable<HttpEvent<Blob>> {
        return this.http.request(new HttpRequest(
            'GET',
            trafficPaths.getFile(fileName),
            null,
            {
                reportProgress: true,
                responseType: 'blob'
            }));
        }
        downloadUserInfo(): Observable<HttpEvent<Blob>> {
            return this.http.request(new HttpRequest(
                'GET',
                trafficPaths.getUserData,
                null,
                {
                    reportProgress: true,
                    responseType: 'blob'
                }));
        }
        
}