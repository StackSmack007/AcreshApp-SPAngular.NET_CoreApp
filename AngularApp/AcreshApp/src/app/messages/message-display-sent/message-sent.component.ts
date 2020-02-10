import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IMessageRecievedSent } from 'src/app/core/interfaces/message-interfaces/messageRecieve';
import { AuthService } from 'src/app/core/services/auth.service';

const pad2 = (num: number): string => (num < 10 ? '0' : '') + num;

@Component({
  selector: 'acr-message-sent',
  templateUrl: './message-sent.component.html',
  styleUrls: ['./message-sent.component.css']
})
export class MessageSentComponent {

  private _mesg: IMessageRecievedSent=null;

  @Input()
  public expanded: boolean = false;
 
  constructor() { }

  get message() {
    return this._mesg;
  }

  @Input()
  set message(m: IMessageRecievedSent) {
    this._mesg = m;
  }

  showHideContent() {
    this.expanded = !this.expanded;
  }

  get dateSent(): string {
    let d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    d.setUTCSeconds(Date.parse(this.message.dateOfCreation));
    return `${pad2(d.getDate())}/${pad2(d.getMonth() + 1)}/${pad2(d.getFullYear())} [${d.getHours()} : ${pad2(d.getMinutes())}]`;
  }
}
