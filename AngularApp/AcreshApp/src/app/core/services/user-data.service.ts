import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserProfileData } from '../interfaces/user-data-interfaces/uprofile';
import { HttpClient } from '@angular/common/http';
import { userDataPaths } from '../settings/apiSettings';
import { AuthService } from './auth.service';
import { ISmallUserInfo } from '../interfaces/user-data-interfaces/userSmallData';
import { IUserProfileEditData } from '../interfaces/user-data-interfaces/userProfileEditData';

@Injectable({
  providedIn: 'root'
})

export class UserDataService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getUserInfoByUserName(userName: string): Observable<IUserProfileData> {
    return this.http.get<IUserProfileData>(userDataPaths.userProfileData(userName))
  }

  changeBlockedStatus(IrritatorUserName: string): Observable<any> {
    return this.http.post(userDataPaths.setBlocking, { IrritatorUserName, DefendorUserName: this.authService.getUserInfo().userName});
  }

  getUserInfoForEditing(): Observable<IUserProfileEditData> {
    debugger
    return this.http.get<IUserProfileEditData>(userDataPaths.userInfo)
  }

  updateUserData(dataWithPassword: IUserProfileEditData): Observable<any> {
    return this.http.post(userDataPaths.userInfo, dataWithPassword)
  }

  getBlockedUserInfos(): Observable<ISmallUserInfo[]> {
    return this.http.get<ISmallUserInfo[]>(userDataPaths.blocked)
  }
  
  getBlockerUserInfos(): Observable<ISmallUserInfo[]> {
    return this.http.get<ISmallUserInfo[]>(userDataPaths.myblockers)
  }
}