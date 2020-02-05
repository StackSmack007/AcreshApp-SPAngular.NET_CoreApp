import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { ProfileInfoComponent } from './profile-info/profile-info.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, ProfileInfoComponent],
  imports: [
    CommonModule, ReactiveFormsModule,AppRoutingModule,FormsModule
  ],
  exports: []
})
export class AuthModule { }
