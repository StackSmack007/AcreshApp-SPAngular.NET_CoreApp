import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { messagePaths } from '../settings/apiSettings';
import { IMessageSend } from '../interfaces/message-interfaces/messageSend';
import { HelperService } from './helper.service';
import { SignalRNewMessagesService } from './signal-r.new-messages.service';
import { map } from 'rxjs/operators';
import { IMessageRecievedSent } from '../interfaces/message-interfaces/messageRecieve';
import { MessageStatus } from '../interfaces/message-interfaces/MessageStatus';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient, private authService: AuthService, private helper: HelperService, public signalR: SignalRNewMessagesService) {
    if (authService.isAuthenticated()) {
      this.getUnreadMsgCount().subscribe(n => this.signalR.unreadCount = n);
    }
  }

  submitMsg(content: string, recieverId: string): Observable<any> {
    let messageObj: IMessageSend = { recieverId, content, senderId: this.authService.getUserInfo().id };
    return this.http.post(messagePaths.base, this.helper.toCS_keys(messageObj))
  }

  getUnreadMsgCount(): Observable<number> {
    return this.http.get<number>(messagePaths.userUnreadCount);
  }

  getRecievedMessages(): Observable<IMessageRecievedSent[]> {
    return this.http.get<IMessageRecievedSent[]>(messagePaths.base).pipe(
      map(res => res.map(x => this.helper.toJS_keys(x))
      ))
  }

  getSentMessages(): Observable<IMessageRecievedSent[]> {
    return this.http.get<IMessageRecievedSent[]>(messagePaths.SentMessages).pipe(
      map(res => res.map(x => this.helper.toJS_keys(x))))
  }
}
