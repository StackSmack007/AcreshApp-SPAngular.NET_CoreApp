import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { MainComponent } from './shared/components/main/main.component';
import { LoginComponent } from './auth/login/login.component';
import { ProfileInfoComponent } from './auth/profile-info/profile-info.component';
import { UserDataResolver } from './core/respolvers/user-data.resolver';
import { ProfileEditComponent } from './auth/profile-edit/profile-edit.component';
import { UserDataProfileEditResolver } from './core/respolvers/user-data-profile-edit.resolver';

const routes: Routes = [
  { path: "", pathMatch: "full", component: MainComponent },
  { path: "authentication/register", component: RegisterComponent },
  { path: "authentication/login", component: LoginComponent },
  {
    path: "user-data/profile/:userName", component: ProfileInfoComponent,
    resolve: { userInfo: UserDataResolver }
  },
  {
    path: "user-data/edit-profile", component: ProfileEditComponent,
    resolve: { userInfo: UserDataProfileEditResolver }
  }

    ///user-data/profile/Edit
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }