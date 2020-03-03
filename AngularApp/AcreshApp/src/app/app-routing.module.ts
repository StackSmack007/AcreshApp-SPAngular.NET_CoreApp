import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { MainComponent } from './shared/components/main/main.component';
import { LoginComponent } from './auth/login/login.component';
import { ProfileInfoComponent } from './auth/profile-info/profile-info.component';
import { UserDataResolver } from './core/respolvers/user-data.resolver';
import { ProfileEditComponent } from './auth/profile-edit/profile-edit.component';
import { UserDataProfileEditResolver } from './core/respolvers/user-data-profile-edit.resolver';
import { ListAllComponent } from './messages/list-all/list-all.component';
import { AuthorizedOnlyGuard } from './core/guards/authorized.only';
import { ListRecipesComponent } from './recipes/list-recipes/list-recipes.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeDetailsResolver } from './core/respolvers/recipe-details-resolver';
import { CreateRecipeComponent } from './recipes/create/create.component';
import { RecipeEditDataResolver } from './core/respolvers/recipe-edit-data-resolver';
import { EditRecipeComponent } from './recipes/edit/edit.component';
import { ListIngredientsComponent } from './ingredients/list-ingredients/list-ingredients.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/index" },
  { path: "index", pathMatch: "full", component: MainComponent },
  { path: "authentication/register", component: RegisterComponent },
  { path: "authentication/login", component: LoginComponent },
  {
    path: "user-data/profile/:userName", component: ProfileInfoComponent,
    resolve: { userInfo: UserDataResolver }
  },
  {
    path: "user-data/edit-profile", component: ProfileEditComponent,
    resolve: { userInfo: UserDataProfileEditResolver }
  },

  {
    path: "message-box", component: ListAllComponent,
    canActivate: [AuthorizedOnlyGuard]
  },

  {
    path: "recipes",
    children: [
      {
      path: "", pathMatch: "full",
      redirectTo: "/all"
    },
    {
      path: "all",
      component: ListRecipesComponent,
    },
    {
      path: "recent",
      component: ListRecipesComponent
    },
    {
      path: "commented",
      component: ListRecipesComponent
    },
    {
      path: "commented-recently",
      component: ListRecipesComponent
    },
    {
      path: "highly-rated",
      component: ListRecipesComponent
    },
    {
      path: "most-rated",
      component: ListRecipesComponent
    },
    {
      path: "favourized",
      component: ListRecipesComponent
    },
    {
      path: "search/:phrase",
      component: ListRecipesComponent
    },
    {
      path: "user/:username",
      component: ListRecipesComponent
    },
    {
      path: "my-favourite",
      component: ListRecipesComponent,
      canActivate: [AuthorizedOnlyGuard]
    },
    {
      path: "my-commented",
      component: ListRecipesComponent,
      canActivate: [AuthorizedOnlyGuard]
    },
    {
      path: "details/:id",
      component: RecipeDetailsComponent,
      resolve: { data: RecipeDetailsResolver }
    },    {
      path: "add-new",
      component: CreateRecipeComponent,
      canActivate: [AuthorizedOnlyGuard]
    },
    {
      path: "edit/:id",
      component: EditRecipeComponent,
      canActivate: [AuthorizedOnlyGuard],
      resolve: { data: RecipeEditDataResolver }
    },
  ]
  },  
    {
      path: "ingredients",
      component: ListIngredientsComponent,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
