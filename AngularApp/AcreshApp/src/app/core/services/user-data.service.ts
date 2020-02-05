import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserProfileData } from '../interfaces/user-data-interfaces/uprofile';
import { HttpClient } from '@angular/common/http';
import { userDataPaths } from '../settings/apiSettings';
import { map, tap } from 'rxjs/operators';
import { HelperService } from './helper.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class UserDataService {
  
  constructor(private http: HttpClient, private hlp: HelperService,private authService:AuthService) { }
  
  getUserInfoById(userName: string): Observable<IUserProfileData> {
    return this.http.get<IUserProfileData>(userDataPaths.getUserProfileData+userName ).pipe(map(x => this.hlp.toJS_keys(x)))
  }
  
  changeBlockedStatus(target:string) : Observable<any> {
   return this.http.post(userDataPaths.setBlocking,{target,user:this.authService.getUserInfo().userName}).pipe(tap(()=>this.authService.updateToken()))
  }
  




}
