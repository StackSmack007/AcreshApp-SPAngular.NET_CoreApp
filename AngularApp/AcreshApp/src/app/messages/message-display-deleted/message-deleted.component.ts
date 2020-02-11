import { Component, Input } from '@angular/core';
import { IMessageRecievedSent } from 'src/app/core/interfaces/message-interfaces/messageRecieve';
import { HelperService, DateFormats } from 'src/app/core/services/helper.service';

@Component({
  selector: 'acr-message-deleted',
  templateUrl: './message-deleted.component.html',
  styleUrls: ['./message-deleted.component.css']
})
export class MessageDeletedComponent {

  @Input()
  message: IMessageRecievedSent;

  expanded: boolean = false;

  constructor(private help:HelperService) { }

  showHideContent() {
    this.expanded = !this.expanded;
  }

  get dateSent(): string {
    return this.help.dateConvert(this.message.dateOfCreation,DateFormats.DefaultFormater);
  }
}