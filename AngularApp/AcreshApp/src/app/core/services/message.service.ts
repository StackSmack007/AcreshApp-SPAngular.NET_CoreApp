import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { messagePaths } from '../settings/apiSettings';
import { IMessageSend } from '../interfaces/message-interfaces/messageSend';
import { HelperService } from './helper.service';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient, private authService: AuthService, private helper: HelperService) { }


  submitMsg(content: string, recieverId: string): Observable<any> {
    let messageObj: IMessageSend = { recieverId, content, senderId: this.authService.getUserInfo().id };
    return this.http.post(messagePaths.submitMsgPath, this.helper.toCS_keys(messageObj))
  }





}
