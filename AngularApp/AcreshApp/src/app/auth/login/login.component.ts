import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { minLengthFields } from 'src/app/core/settings/globalConstants';
import { ToastrService } from 'ngx-toastr';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { MessageService } from 'src/app/core/services/message.service';
import { SetMessageCount } from 'src/app/store/actions/user.unread.count.action';

@Component({
  selector: 'acr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public lf: FormGroup = null;

  constructor(private router: Router,
    private authService: AuthService,
    private fb: FormBuilder,
    private toastrService: ToastrService,
    private messageService: MessageService,
    private store: Store<AppState>) {
    this.buildForm();
    this.toastrService.toastrConfig.positionClass = "toastr";
    this.toastrService.toastrConfig.closeButton = true;
  }

  isTouchedInvalid(name: string) {
    return this.lf.controls[name].touched && this.lf.controls[name].invalid;
  }

  getCtrlErrors(name: string) {
    return (this.lf.controls[name] && this.lf.controls[name]["errors"]) ? this.lf.controls[name]["errors"] : null;
  }

  getCtrl(name: string) {
    return this.lf.controls[name] || null;
  }

  buildForm() {
    this.lf = this.fb.group({
      "umail": ["", [Validators.required]],
      "password": ["", [Validators.required, Validators.minLength(minLengthFields.password)]],
    })
  }

  submitLogin() {
    console.log(this.lf);
    const values = this.lf.value;
    this.authService.login(values).subscribe(r => {
      console.log("success");
      console.log("Avemos Papa:", this.authService.getUserInfo());
      this.toastrService.success("Successfull login", `Welcome ${values.umail}`)
      this.router.navigate([""]);

      this.messageService.getUnreadMsgCount().subscribe(cnt => {
        debugger;
        this.store.dispatch(new SetMessageCount({ userName: values.userName, unreadMessagesCount: cnt }))
        debugger;
      })
    },
      e => {
        console.log("failure ->", e.error.error);
        this.toastrService.error("UserName or Password Mismatch!", "Invalid Input!")
      },
      () => {
        console.log("completed? wtf");
      }
    )
  }
}

