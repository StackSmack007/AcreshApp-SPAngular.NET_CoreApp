import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { IUserProfileData } from '../interfaces/user-data-interfaces/uprofile';
import { Observable } from 'rxjs';
import { UserDataService } from '../services/user-data.service';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserDataResolver implements Resolve<IUserProfileData> {
  constructor(private udService: UserDataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUserProfileData> {
    var userName = route.paramMap.get('userName');
    return this.udService.getUserInfoById(userName);
  }
}
