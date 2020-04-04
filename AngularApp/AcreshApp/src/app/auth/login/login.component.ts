import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { minLengthFields } from 'src/app/core/settings/globalConstants';
import { ToastrService } from 'ngx-toastr';

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
    private toastrService: ToastrService) {
    this.buildForm();
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
      "umail": ["", [Validators.required, Validators.minLength(3)]],
      "password": ["", [Validators.required, Validators.minLength(minLengthFields.password)]],
    })
  }

  submitLogin() {
    console.log(this.lf);
    const values = this.lf.value;
    this.authService.login(values).subscribe(r => {
      this.toastrService.success("Successfull login", `Welcome ${values.umail}`)
      this.router.navigate([""]);
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

