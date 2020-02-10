import { Component, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'src/app/core/services/message.service';

@Component({
  selector: 'acr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements DoCheck {
  public userName: string = null;
  constructor(private router: Router, private authService: AuthService, private toastr: ToastrService, private messageService: MessageService) { }

  ngDoCheck() {
    if (this.authService.isAuthenticated() && !this.userName) {
      this.userName = this.authService.getUserInfo().userName;
     // debugger;
      this.messageService.signalR.startConnection(this.userName).then(() => this.messageService.signalR.updateUserUnreadCount(this.userName))
      // this.messageService.getUnreadMsgCount().subscribe(x => { 
      //   this.messageService.signalR.unreadCount = x }, console.log, () => {
      //   this.messageService.signalR.monitorChange(this.authService.getUserInfo().id);
      //   this.messageService.signalR.monitorAllSeen(this.authService.getUserInfo().id);
      // });
    }
  }

  get unreadCount() {
    return this.messageService.signalR.unreadCount;
  }

  ngOnDestroy() {
    this.messageService.signalR.stopConnection()
  }

  logout() {
    this.authService.clearUserData();
    this.toastr.show("Goodbye user!");
    this.userName = null;
    this.router.navigate([""]);
    this.messageService.signalR.stopConnection()
  }
}