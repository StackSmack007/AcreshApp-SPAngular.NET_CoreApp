import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserDataService } from 'src/app/core/services/user-data.service';

@Component({
  selector: 'acr-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {

  public addressTitles = {
    male: "m-r. ",
    female: "m-s. ",
    ufo: "",
  }

  public isAuthor = (): boolean => this.myUserName == this.user.userName;
  public amBlocked = false;


  @ViewChild("blockOpt", { static: false })
  blockOption: ElementRef;

  public user = {
    gender: "male",
    cookRank: "Shef Aprentice",
    userName: "lajnogrizetc",
    firstName: "Първан",
    lastName: "Вториславов",
    avPic: `https://media.gettyimages.com/photos/cropped-image-of-person-eye-picture-id942369796?s=612x612`,
    email: "bab@vuna",
    description: `What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    recipesShared: 10,
    blockedUserNames: ["generala", "lopodroz"]
  }


  public myUserName: string;
  constructor(private route: ActivatedRoute, private authService: AuthService,private userDataService:UserDataService) {
    this.user = route.snapshot.data["userInfo"];
    this.myUserName = authService.getUserInfo().userName;
    this.amBlocked = this.user.blockedUserNames.includes(this.myUserName);
  }

  changeBlocking() {

  }

  ngOnInit() {
  }


  ngOnDestroy() {
    const isThisUserBlockedByMe = this.authService.getUserInfo().blocked.includes(this.user.userName);
    if (this.blockOption.nativeElement.checked && !isThisUserBlockedByMe ||
      !this.blockOption.nativeElement.checked && isThisUserBlockedByMe) { 
        this.userDataService.changeBlockedStatus(this.user.userName).subscribe();
      }
  }


  submitMessage(msg: string) {
    console.log(msg);
  }

}
