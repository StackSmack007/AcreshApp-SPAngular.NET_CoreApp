import { Component, Input } from '@angular/core';
import { IMessageRecievedSent } from 'src/app/core/interfaces/message-interfaces/messageRecieve';

const pad2 = (num: number): string => (num < 10 ? '0' : '') + num;

@Component({
  selector: 'acr-message-deleted',
  templateUrl: './message-deleted.component.html',
  styleUrls: ['./message-deleted.component.css']
})
export class MessageDeletedComponent {

  @Input()
  message: IMessageRecievedSent;

  expanded: boolean = false;

  constructor() { }

  showHideContent() {
    this.expanded = !this.expanded;
  }

  get dateSent(): string {
    let d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    d.setUTCSeconds(Date.parse(this.message.dateOfCreation));
    return `${pad2(d.getDate())}/${pad2(d.getMonth() + 1)}/${pad2(d.getFullYear())} [${d.getHours()} : ${pad2(d.getMinutes())}]`;
  }
}