import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IMessageRecievedSent } from 'src/app/core/interfaces/message-interfaces/messageRecieve';
import { AuthService } from 'src/app/core/services/auth.service';
import { HelperService, CustomDateFormats } from 'src/app/core/services/helper.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'acr-message-recieved',
  templateUrl: './message-recieved.component.html',
  styleUrls: ['./message-recieved.component.css'],
  animations: [
    trigger('fade', [transition('void=>*', [style({ opacity: '0' }), animate(1200, style({ opacity: '1' }))]),])
  ]
})
export class MessageRecievedComponent {

  private _mesg: IMessageRecievedSent = {
    id: 123,
    dateOfCreation: "",
    isDeleted: false,
    senderUserName: "Sandio",
    recieverUserName: "Sandio",
    recieverAvatarPicture: "https://i.pinimg.com/originals/7c/b0/18/7cb018683132322074c039046f55d01a.jpg",
    senderAvatarPicture: "https://i.pinimg.com/originals/7c/b0/18/7cb018683132322074c039046f55d01a.jpg",
    content: "kade e mlqkoto",
    status: "UnRead",
  }
  @Output()
  openUnreadMessageEmitter: EventEmitter<number> = new EventEmitter();

  @Output()
  deleteMessageEmitter: EventEmitter<{ id: number, isSeen: boolean }> = new EventEmitter();

  public expanded: boolean = true;
  public showBlockInfo: boolean = false;

  constructor(private authService: AuthService) { }

  get message() {
    return this._mesg;
  }

  @Input()
  set message(m: IMessageRecievedSent) {
    this._mesg = m;
    this.expanded = m.status === "Read";
  }

  get isSenderBlocked() {
    return this.authService.getUserInfo().blocked.includes(this.message.senderUserName);
  }

  showHideContent() {
    this.expanded = !this.expanded;
    if (this.message.status === "Read") { return; }
    this.message.status = "Read";
    this.openUnreadMessageEmitter.emit(this.message.id);
  }

  showHideBlockInfo() {
    this.showBlockInfo = !this.showBlockInfo;
  }

  del() {
    this.deleteMessageEmitter.emit({ id: this.message.id, isSeen: this.message.status === "Read" });
  }

  get dateSent(): string {
    return HelperService.dateConvert(this.message.dateOfCreation,CustomDateFormats.DefaultFormater);
  }
}
