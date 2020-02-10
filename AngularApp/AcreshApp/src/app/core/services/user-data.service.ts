import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserProfileData } from '../interfaces/user-data-interfaces/uprofile';
import { HttpClient } from '@angular/common/http';
import { userDataPaths } from '../settings/apiSettings';
import { map } from 'rxjs/operators';
import { HelperService } from './helper.service';
import { AuthService } from './auth.service';
import { IUserProfileEditData } from '../interfaces/user-data-interfaces/IUserProfileEditData';

@Injectable({
  providedIn: 'root'
})

export class UserDataService {

  constructor(private http: HttpClient, private hlp: HelperService, private authService: AuthService) { }

  getUserInfoById(userName: string): Observable<IUserProfileData> {
    return this.http.get<IUserProfileData>(userDataPaths.userProfileData(userName)).pipe(map(x => this.hlp.toJS_keys(x)))
  }

  changeBlockedStatus(IrritatorUserName: string): Observable<any> {
    return this.http.post(userDataPaths.setBlocking, { IrritatorUserName, DefendorUserName: this.authService.getUserInfo().userName });
  }

  getUserInfoForEditing(): Observable<IUserProfileEditData> {
    return this.http.get<IUserProfileEditData>(userDataPaths.userProfileEditData(this.authService.getUserInfo().id))
      .pipe(map(x => this.hlp.toJS_keys(x)))
  }

  updateUserData(dataWithPassword: IUserProfileEditData): Observable<any> {
    return this.http.post(userDataPaths.updateUserInfo, this.hlp.toCS_keys(dataWithPassword))
  }
}