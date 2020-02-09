import { Component, Input } from '@angular/core';
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
  @Input()
  public amSender: boolean = false;
  public shown: boolean = true;
  public showBlockInfo: boolean = false;

  constructor(private authService: AuthService) { }

  get message() {
    return this._mesg;
  }
  @Input()
  set message(m: IMessageRecievedSent) {
    this._mesg = m;
    this.shown = m.status === "Read";
  }

  get isSenderBlocked() {
    return this.authService.getUserInfo().blocked.includes(this.message.senderUserName);
  }

  get relevantPicture() {
    return this.amSender ?  this.message.recieverAvatarPicture:this.message.senderAvatarPicture;
  }

  showHideContent() {
    this.shown = !this.shown;
  }

  showHideBlockInfo() {
    this.showBlockInfo = !this.showBlockInfo;
  }

  deleteThis() {
  }

  get dateSent(): string {
    let d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    d.setUTCSeconds(Date.parse(this.message.dateOfCreation));
    // debugger;
    return `${pad2(d.getDate())}/${pad2(d.getMonth() + 1)}/${pad2(d.getFullYear())} [${d.getHours()} : ${pad2(d.getMinutes())}]`;
  }
}
