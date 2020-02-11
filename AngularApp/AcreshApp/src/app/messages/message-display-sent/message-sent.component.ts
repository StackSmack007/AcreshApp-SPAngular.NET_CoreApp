import { Component, Input } from '@angular/core';
import { IMessageRecievedSent } from 'src/app/core/interfaces/message-interfaces/messageRecieve';
import { HelperService, DateFormats } from 'src/app/core/services/helper.service';

@Component({
  selector: 'acr-message-sent',
  templateUrl: './message-sent.component.html',
  styleUrls: ['./message-sent.component.css']
})
export class MessageSentComponent {
  @Input()
  message: IMessageRecievedSent;
  public expanded: boolean = false;

  constructor(private help:HelperService) { }

  showHideContent() {
    this.expanded = !this.expanded;
  }

  get dateSent(): string {
    return this.help.dateConvert(this.message.dateOfCreation,DateFormats.DefaultFormater);
  }
}
