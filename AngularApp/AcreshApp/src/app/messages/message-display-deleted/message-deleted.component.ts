import { Component, Input } from '@angular/core';
import { IMessageRecievedSent } from 'src/app/core/interfaces/message-interfaces/messageRecieve';
import { HelperService, CustomDateFormats } from 'src/app/core/services/helper.service';

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
    return HelperService.dateConvert(this.message.dateOfCreation,CustomDateFormats.DefaultFormater);
  }
}