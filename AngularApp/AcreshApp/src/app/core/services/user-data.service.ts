import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserProfileData } from '../interfaces/user-data-interfaces/uprofile';
import { HttpClient } from '@angular/common/http';
import { userDataPaths } from '../settings/apiSettings';
import { map } from 'rxjs/operators';
import { HelperService } from './helper.service';
import { AuthService } from './auth.service';
import { ISmallUserInfo } from '../interfaces/user-data-interfaces/userSmallData';
import { IUserProfileEditData } from '../interfaces/user-data-interfaces/userProfileEditData';

@Injectable({
  providedIn: 'root'
})

export class UserDataService {

  constructor(private http: HttpClient, private hlp: HelperService, private authService: AuthService) { }

  getUserInfoByUserName(userName: string): Observable<IUserProfileData> {
    return this.http.get<IUserProfileData>(userDataPaths.userProfileData(userName)).pipe(map(x => this.hlp.toJS_keys(x)))
  }

  changeBlockedStatus(IrritatorUserName: string): Observable<any> {
    return this.http.post(userDataPaths.setBlocking, { IrritatorUserName, DefendorUserName: this.authService.getUserInfo().userName });
  }

  getUserInfoForEditing(): Observable<IUserProfileEditData> {
    return this.http.get<IUserProfileEditData>(userDataPaths.userInfo)
      .pipe(map(x => this.hlp.toJS_keys(x)))
  }

  updateUserData(dataWithPassword: IUserProfileEditData): Observable<any> {
    return this.http.post(userDataPaths.userInfo, this.hlp.toCS_keys(dataWithPassword))
  }

  getBlockedUserInfos(): Observable<ISmallUserInfo[]> {
    return this.http.get<ISmallUserInfo[]>(userDataPaths.blocked).pipe(map(arr => arr.map(x => this.hlp.toJS_keys(x))))
  }
  

  getBlockerUserInfos(): Observable<ISmallUserInfo[]> {
    return this.http.get<ISmallUserInfo[]>(userDataPaths.myblockers).pipe(map(arr => arr.map(x => this.hlp.toJS_keys(x))))
  }
}