import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, ProfileInfoComponent, ProfileEditComponent],
  imports: [
    CommonModule, ReactiveFormsModule,AppRoutingModule,FormsModule
  ],
  exports: []
})
export class AuthModule { }