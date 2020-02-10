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

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(private http: HttpClient, private authService: AuthService, private helper: HelperService, public signalR: SignalRNewMessagesService) {
  }

  submitMsg(content: string, recieverId: string): Observable<any> {
    let messageObj: IMessageSend = { recieverId, content, senderId: this.authService.getUserInfo().id };
    return this.http.post(messagePaths.base, this.helper.toCS_keys(messageObj))
  }

  markReadMessage(messageId: number): Observable<number> {
    return this.http.put<number>(messagePaths.base, messageId);
  }

  getRecievedMessages(): Observable<IMessageRecievedSent[]> {
    return this.http.get<IMessageRecievedSent[]>(messagePaths.base).pipe(
      map(res => res.map(x => this.helper.toJS_keys(x))
      ))
  }

  getSentMessages(): Observable<IMessageRecievedSent[]> {
    return this.http.get<IMessageRecievedSent[]>(messagePaths.sentMessages).pipe(
      map(res => res.map(x => this.helper.toJS_keys(x))))
  }

  deleteMessage(messageId: number): Observable<any> {
    return this.http.delete(messagePaths.delete(messageId));
  }
}
