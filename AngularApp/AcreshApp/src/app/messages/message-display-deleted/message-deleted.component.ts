import { Component, Input } from '@angular/core';
import { IMessageRecievedSent } from 'src/app/core/interfaces/message-interfaces/messageRecieve';
import { HelperService, CustomDateFormats } from 'src/app/core/services/helper.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'acr-message-deleted',
  templateUrl: './message-deleted.component.html',
  styleUrls: ['./message-deleted.component.css'],
  animations: [
    trigger('fade', [transition('void=>*', [style({ opacity: '0' }), animate(1200, style({ opacity: '1' }))]),])
  ]
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