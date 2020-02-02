import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { authPaths } from '../settings/apiSettings';
import { IUser } from './user';
import { IUserDataTakenResult } from './IUserDataTakenResult';
import { Gender } from './Gender';
import { IUserSendable } from './IUserSendable';

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


  logout() {
    localStorage.clear();
  }

  getUserInfo(): IUserTokenInfo {
    return this.parseJwt(this.getToken())
  }

  private parseJwt(token): IUserTokenInfo {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
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

interface LoginResult {
  authToken: string,
  isSuccessfull: boolean
}

interface IUserTokenInfo {
  //ToDo....
}

