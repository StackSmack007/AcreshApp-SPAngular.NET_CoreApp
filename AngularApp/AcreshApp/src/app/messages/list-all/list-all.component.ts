import { Component, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { MessageService } from 'src/app/core/services/message.service';
import { Observable } from 'rxjs';
import { IMessageRecievedSent } from 'src/app/core/interfaces/message-interfaces/messageRecieve';
import { map } from 'rxjs/operators';

@Component({
  selector: 'acr-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.css']
})
export class ListAllComponent {

  private all$: Observable<IMessageRecievedSent[]> = null;
  public nonDeleted$: Observable<IMessageRecievedSent[]> = null;
  public deleted$: Observable<IMessageRecievedSent[]> = null;

  public sent$: Observable<IMessageRecievedSent[]> = null;
  @ViewChild("defaultTab", { static: true })
  defaultTab: ElementRef;
  public myUserName: string = null;

  constructor(authService: AuthService, private messageService: MessageService) {
    this.resetDeletedNonDeletedStreams();
    this.sent$ = this.messageService.getSentMessages()
    this.myUserName = authService.getUserInfo().userName;
    this.messageService.signalR.startConnection(this.myUserName);
  }

  private resetDeletedNonDeletedStreams() {
    this.all$ = this.messageService.getRecievedMessages()
    this.nonDeleted$ = this.all$.pipe(map(res => res.slice().filter(x => !x.isDeleted)));
    this.deleted$ = this.all$.pipe(map(res => res.slice().filter(x => x.isDeleted)));
  }

  openUnreadMessage(id: number) {
    this.messageService.markReadMessage(id).subscribe(() => {
      this.messageService.signalR.updateUserUnreadCount(this.myUserName)
    })
  }

  setDeletedStatus({ id, isSeen }) {
    console.log("triem", id)
    this.messageService.deleteMessage(id).subscribe(() => {
      this.resetDeletedNonDeletedStreams();
      if (!isSeen) {
        this.messageService.signalR.updateUserUnreadCount(this.myUserName)
      }
    })
  }
}
