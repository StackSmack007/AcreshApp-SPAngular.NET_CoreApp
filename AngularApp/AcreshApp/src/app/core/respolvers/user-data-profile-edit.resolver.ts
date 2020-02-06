import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserDataService } from '../services/user-data.service';
import { IUserProfileEditData } from '../interfaces/user-data-interfaces/IUserProfileEditData';
@Injectable({
  providedIn: 'root'
})
export class UserDataProfileEditResolver implements Resolve<IUserProfileEditData> {
  constructor(private udService: UserDataService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUserProfileEditData> {
    return this.udService.getUserInfoForEditing();
  }
}
