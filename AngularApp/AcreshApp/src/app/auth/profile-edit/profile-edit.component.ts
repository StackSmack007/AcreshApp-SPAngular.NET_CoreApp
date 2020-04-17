import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { avImages, maxLengthFields, minLengthFields } from 'src/app/core/settings/globalConstants';
import { takenValueValidator } from 'src/app/core/validators/takenName';
import { Router, ActivatedRoute } from '@angular/router';
import { HelperService } from 'src/app/core/services/helper.service';
import { UserDataService } from 'src/app/core/services/user-data.service';
import { IUserProfileEditData } from 'src/app/core/interfaces/user-data-interfaces/userProfileEditData';
import { TrafficService } from 'src/app/core/services/traffic.service';


@Component({
  selector: 'acr-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent {
  public rf: FormGroup = null;
  private takenEmails: string[] = [];
  private user: IUserProfileEditData = null;
  public fileAvatar: boolean = false;

  constructor(route: ActivatedRoute, private router: Router, private authService: AuthService, 
    private userDataService: UserDataService, private fb: FormBuilder, private toastr: ToastrService,private trafficService: TrafficService) {
    this.buildForm();
    this.user = route.snapshot.data["userInfo"];
    this.rf.patchValue(this.user);
    this.rf.controls.gender.valueChanges.subscribe(gender => {
      if (!this.fileAvatar) this.rf.controls.avatarPicture.setValue(avImages[gender][0]);
    })
  }

  nextPicture() {
    this.rf.controls.avatarPicture.setValue(HelperService.getNextItem(avImages[this.gender], this.avatarImg));
  }

  prevPicture() {
    this.rf.controls.avatarPicture.setValue(HelperService.getPreviousItem(avImages[this.gender], this.avatarImg));
  }

  isTouchedInvalid(name: string) {
    return this.rf.controls[name].touched && this.rf.controls[name].invalid;
  }

  getCtrlErrors(name: string) {
    return (this.rf.controls[name] && this.rf.controls[name]["errors"]) ? this.rf.controls[name]["errors"] : null;
  }

  getCtrl(name: string) {
    return this.rf.controls[name] || null;
  }

  get gender(): string {
    return this.rf.value.gender;
  }
  get avatarImg(): string {
    return this.rf.value.avatarPicture;
  }

  buildForm() {
    this.rf = this.fb.group({
      "userName": "",
      "firstName": ["", [Validators.required, Validators.pattern(`^[^\\d\\^\\$\\&\\+\\,\\:\\;\\=\\?\\@\\#\\|\\<\\>\\.\\^\\*\\(\\)\\%\\!\\-\\\\\\/\\]\\[\\{\\}]{1,${maxLengthFields.names}}$`)]],
      "lastName": ["", [Validators.pattern(`^[^\\d\\^\\$\\&\\+\\,\\:\\;\\=\\?\\@\\#\\|\\<\\>\\.\\^\\*\\(\\)\\%\\!\\-\\\\\\/\\]\\[\\{\\}]{1,${maxLengthFields.names}}$`)]],
      "gender": ["ufo", [Validators.required]],
      "email": ["", [Validators.required, Validators.email, takenValueValidator(this.takenEmails)]],
      "password": ["", [Validators.required, Validators.minLength(minLengthFields.password)]],
      "avatarPicture": [avImages.ufo[0], [Validators.required]],
      "description": ["", [Validators.maxLength(maxLengthFields.description)]],
    });
  }

  processPicture(pic: File) {
    if (pic.size > 100000) return this.toastr.error("File size must not exceed 100 kb! Dimmensions 300x300px!", "Failure")
    this.trafficService.upload(pic).subscribe(r => {
      this.fileAvatar = true;
      this.rf.get("avatarPicture").setValue(r);
    },error=>console.log(error,"nsh"));
  }

  submitEdit() {
    console.log(this.rf);
    const values = this.rf.value;
        if (this.user.email !== values.email) {
      this.authService.checkUserNameOrEmailTaken(values).subscribe(answer => {
        if (answer.emailTaken) {
          this.takenEmails.push(values.email)
          this.rf.controls.email.updateValueAndValidity();
          return;
        }
        this.sendDataToAPI(values);
      })
    } else {
      this.sendDataToAPI(values);
    }
  }

  private sendDataToAPI(values) {
    this.userDataService.updateUserData(values).subscribe(
      () => {
        this.toastr.success(`Successfully modified profile info`, "Success!")
        this.router.navigate([`/user-data/profile/${values.userName}`]);
      },
      (e) => {
        console.log(e)
        this.toastr.error("Incorrect password!", "Failure")
      })
  }
}