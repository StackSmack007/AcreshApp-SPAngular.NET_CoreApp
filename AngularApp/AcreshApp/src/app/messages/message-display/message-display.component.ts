import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IMessageRecievedSent } from 'src/app/core/interfaces/message-interfaces/messageRecieve';
import { AuthService } from 'src/app/core/services/auth.service';

const pad2 = (num: number): string => (num < 10 ? '0' : '') + num;

@Component({
  selector: 'acr-message-display',
  templateUrl: './message-display.component.html',
  styleUrls: ['./message-display.component.css']
})
export class MessageDisplayComponent {

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

  @Input()
  public amSender: boolean = false;
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

  get relevantPicture() {
    return this.amSender ? this.message.recieverAvatarPicture : this.message.senderAvatarPicture;
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
    let d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    d.setUTCSeconds(Date.parse(this.message.dateOfCreation));
    return `${pad2(d.getDate())}/${pad2(d.getMonth() + 1)}/${pad2(d.getFullYear())} [${d.getHours()} : ${pad2(d.getMinutes())}]`;
  }
}
