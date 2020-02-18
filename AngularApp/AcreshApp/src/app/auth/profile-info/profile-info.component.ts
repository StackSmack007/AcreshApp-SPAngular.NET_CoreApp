import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserDataService } from 'src/app/core/services/user-data.service';
import { IUserProfileData } from 'src/app/core/interfaces/user-data-interfaces/uprofile';
import { MessageService } from 'src/app/core/services/message.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'acr-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent {

  public addressTitles = {
    male: "m-r. ",
    female: "m-s. ",
    ufo: "",
  }

  public isAuthor = (): boolean => this.myUserName == this.user.userName;
  public amBlocked = false;
  public iblocked = false;

  @ViewChild("blockOpt", { static: false })
  blockOption: ElementRef;

  public user: IUserProfileData = null;

  public myUserName: string;
  constructor(private toastr: ToastrService, route: ActivatedRoute, private authService: AuthService, private userDataService: UserDataService, private messageService: MessageService) {
    this.user = route.snapshot.data["userInfo"];
    this.myUserName = authService.getUserInfo().userName;
    this.amBlocked = this.user.blockedUserNames.includes(this.myUserName);
    this.iblocked = this.authService.getUserInfo().blocked.includes(this.user.userName);
  }

   ngOnDestroy() {
    if (!this.isAuthor()) {
      const iBlockedUser = this.authService.getUserInfo().blocked.includes(this.user.userName);
      if (this.blockOption.nativeElement.checked && !iBlockedUser ||
        !this.blockOption.nativeElement.checked && iBlockedUser) {
        this.userDataService.changeBlockedStatus(this.user.userName).subscribe(() => {
          this.authService.updateToken().subscribe((t) => { console.log(`new token: ${t}`) })
        });
      }
    }
  }

  submitMessage(mf: NgForm) {
    if(mf.invalid) return;
    this.messageService.submitMsg(mf.value.msg, this.user.id).subscribe(() => {
      this.toastr.success("Message Sent", "Success");
      mf.reset();
      this.messageService.signalR.updateUserUnreadCount(this.user.userName)
    }, () => this.toastr.error(`Message Not Sent`, "Failure"))
    console.log(mf);
  }


s
}