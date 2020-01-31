import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(http:HttpClient) {   }
  
    isAuthenticated():boolean{
    return localStorage.getItem("id")!==null
  }
}
