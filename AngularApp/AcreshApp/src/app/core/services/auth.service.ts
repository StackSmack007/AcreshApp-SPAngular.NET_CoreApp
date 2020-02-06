import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { authPaths } from '../settings/apiSettings';
import { IUser } from '../interfaces/user';
import { IUserDataTakenResult } from '../interfaces/auth-Interfaces/userDataTakenResult';
import { Gender } from '../interfaces/Gender';
import { CookRank } from "../interfaces/CookRank";
import { IUserSendable } from '../interfaces/auth-Interfaces/userSendable';
import { IUserInfo } from '../interfaces/auth-Interfaces/userInfo';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  isAuthenticated(): boolean {
    return localStorage.getItem("authToken") !== null
  }

  checkUserNameOrEmailTaken({ userName, email }): Observable<IUserDataTakenResult> {
    return this.http.post<IUserDataTakenResult>(authPaths.checkUserNameOrEmailTaken, { UserName: userName, Email: email });
  }

  register(ud: IUser): Observable<LoginResult> {
    let userData: IUserSendable = {
      UserName: ud.userName,
      Email: ud.email,
      FirstName: ud.firstName,
      Password: ud.password,
      AvatarPicture: ud.avatarPicture,
      Gender: Gender[ud.gender],
      LastName: ud.lastName,
      Description: ud.description,
    }

    return this.http.post<LoginResult>(authPaths.registerUser, userData);
  }

  login({ umail, password }) {
    return this.http.post(authPaths.logInUser, { UserNameOrEmail: umail, Password: password });
  }

  clearUserData() {
    localStorage.clear();
  }

  getUserInfo(): IUserInfo {
    return this.parseJwt(this.getToken())
  }

  updateToken(): Observable<LoginResult> {
    return this.http.post<LoginResult>(authPaths.updateToken, {}).pipe(
      tap(lr => {
        if (lr.isSuccessfull) {
          this.storeToken(lr.authToken);
          console.log(lr);
        }
      })
    );
  }


  private parseJwt(token): IUserInfo {
    if (!token) return null;
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    const tInfo: IUserTokenInfo = JSON.parse(jsonPayload);

    return {
      id: tInfo._id,
      userName: tInfo.unique_name,
      fullName: tInfo.fullName,
      avPic: tInfo.avPic,
      cookRank: CookRank[tInfo.cookRank],
      roles: tInfo.roles.split("|"),
      blocked: tInfo.blocked.split("|"),
      exp: tInfo.exp,
    };
  };

  public getToken() {
    return localStorage.getItem("authToken") || null;
  }

  public storeToken(token: string): void {
    localStorage.setItem("authToken", token);
  }

  public getChupakabra(): any {
    return this.http.get<any>("https://localhost:5001/users/vzemi")
  }
}

