import { Component, Input } from '@angular/core';
import { IMessageRecievedSent } from 'src/app/core/interfaces/message-interfaces/messageRecieve';
import { HelperService, CustomDateFormats } from 'src/app/core/services/helper.service';

@Component({
  selector: 'acr-message-sent',
  templateUrl: './message-sent.component.html',
  styleUrls: ['./message-sent.component.css']
})
export class MessageSentComponent {
  @Input()
  message: IMessageRecievedSent;
  public expanded: boolean = false;

  constructor() { }

  showHideContent() {
    this.expanded = !this.expanded;
  }

  get dateSent(): string {
    return HelperService.dateConvert(this.message.dateOfCreation,CustomDateFormats.DefaultFormater);
  }
}
