import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { takenValueValidator } from 'src/app/core/validators/takenName';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { sameFieldsValidator } from 'src/app/core/validators/sameInputVal';
import { avImages, maxLengthFields, minLengthFields } from 'src/app/core/settings/globalConstants';
import { ToastrService } from 'ngx-toastr';
import { HelperService } from 'src/app/core/services/helper.service';

@Component({
  selector: 'acr-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public rf: FormGroup = null;
  private takenUserNames: string[] = [];
  private takenEmails: string[] = [];

  constructor(private router: Router, private authService: AuthService, private fb: FormBuilder, private toastr: ToastrService) {
    this.buildForm();
    this.rf.controls.gender.valueChanges.subscribe(gender => {
      this.rf.controls.avatarPicture.setValue(avImages[gender][0]);
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
      "userName": ["", [Validators.required, Validators.minLength(minLengthFields.username), takenValueValidator(this.takenUserNames)]],
      "firstName": ["", [Validators.required, Validators.pattern(`^[^\\d\\^\\$\\&\\+\\,\\:\\;\\=\\?\\@\\#\\|\\<\\>\\.\\^\\*\\(\\)\\%\\!\\-\\\\\\/\\]\\[\\{\\}]{1,${maxLengthFields.names}}$`)]],
      "lastName": ["", [Validators.pattern(`^[^\\d\\^\\$\\&\\+\\,\\:\\;\\=\\?\\@\\#\\|\\<\\>\\.\\^\\*\\(\\)\\%\\!\\-\\\\\\/\\]\\[\\{\\}]{1,${maxLengthFields.names}}$`)]],
      "gender": ["ufo", [Validators.required]],
      "email": ["", [Validators.required, Validators.email, takenValueValidator(this.takenEmails)]],
      "password": ["", [Validators.required, Validators.minLength(minLengthFields.password)]],
      "rePassword": ["", [Validators.required, sameFieldsValidator(() => this.rf ? this.rf.value.password : null)]],// Validators.minLength(minLengths.password)],],// ],
      "avatarPicture": [avImages.ufo[0], [Validators.required]],
      "description": ["", [Validators.maxLength(maxLengthFields.description)]],
    })
  }

  submitRegister() {
     const values = this.rf.value;
    this.authService.checkUserNameOrEmailTaken(values).subscribe(answer => {
      if (answer.userNameTaken || answer.emailTaken) {
        if (answer.userNameTaken) {
          this.takenUserNames.push(values.userName)
          this.rf.controls.userName.updateValueAndValidity();
        }
        if (answer.emailTaken) {
          this.takenEmails.push(values.email)
          this.rf.controls.email.updateValueAndValidity();
        }
        return;
      }
      this.authService.register(values).subscribe(() => {
        this.toastr.success(`Welcome user ${values.userName}`, "Successfull Registration!")
        this.router.navigate([""]);
      })
    })
  }
}
