import { Component, DoCheck, ViewChild, ElementRef } from '@angular/core';
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

  @ViewChild("searchPhrase")
  phrase: ElementRef;


  ngDoCheck() {
    if (this.authService.isAuthenticated() && !this.userName) {
      this.userName = this.authService.getUserInfo().userName;
      this.messageService.signalR.startConnection(this.userName).then(() => this.messageService.signalR.updateUserUnreadCount(this.userName))
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

  search() {
    let v: string = this.phrase.nativeElement.value;
    if (v.length < 2) return;
    this.router.navigate([`/recipes/search`, { phrase: v }]);
    this.phrase.nativeElement.value = '';
  }

}