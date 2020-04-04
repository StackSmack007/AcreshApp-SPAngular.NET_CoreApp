import { Component, Input } from '@angular/core';
import { IMessageRecievedSent } from 'src/app/core/interfaces/message-interfaces/messageRecieve';
import { HelperService, CustomDateFormats } from 'src/app/core/services/helper.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'acr-message-sent',
  templateUrl: './message-sent.component.html',
  styleUrls: ['./message-sent.component.css'],
  animations: [
    trigger('fade', [transition('void=>*', [style({ opacity: '0' }), animate(1200, style({ opacity: '1' }))]),])
  ]
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
    return HelperService.dateConvert(this.message.dateOfCreation, CustomDateFormats.DefaultFormater);
  }
}
