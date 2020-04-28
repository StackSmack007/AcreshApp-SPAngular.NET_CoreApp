import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { MainComponent } from './shared/components/main/main.component';
import { LoginComponent } from './auth/login/login.component';
import { ProfileInfoComponent } from './auth/profile-info/profile-info.component';
import { UserDataResolver } from './core/resolvers/user-data.resolver';
import { ProfileEditComponent } from './auth/profile-edit/profile-edit.component';
import { UserDataProfileEditResolver } from './core/resolvers/user-data-profile-edit.resolver';
import { ListAllComponent } from './messages/list-all/list-all.component';
import { AuthorizedOnlyGuard } from './core/guards/authorized.only';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeDetailsResolver } from './core/resolvers/recipe-details-resolver';
import { CreateRecipeComponent } from './recipes/create/create.component';
import { RecipeEditDataResolver } from './core/resolvers/recipe-edit-data-resolver';
import { EditRecipeComponent } from './recipes/edit/edit.component';
import { ListIngredientsComponent } from './ingredients/list-ingredients/list-ingredients.component';
import { IngredientDetailsComponent } from './ingredients/ingredient-details/ingredient-details.component';
import { CreateIngredientComponent } from './ingredients/create-ingredient/create-ingredient.component';
import { EditIngredientComponent } from './ingredients/edit-ingredient/edit-ingredient.component';
import { IngredientEditResolver } from './core/resolvers/ingredient-edit-data-resolver';
import { ListAllRComponent, ListMostRecentRComponent, ListMostCommentedRComponent, ListCommentedRecentlyRComponent, ListHighlyRatedRComponent, ListMostRatedRComponent, ListMostFavouredRComponent, ListSearchedRComponent, ListUserSharedRComponent, ListMyFavouriteRComponent, ListMyCommentedRComponent, ListIngredientsContainingRComponent } from './recipes/list-recipes/recipes-list-exporter';
import { MainBoardCategoriesComponent } from './categories/main-board/main-board-categories.component';
import { ListInCategoryRComponent } from './recipes/list-recipes/filters/in-category/list-inCategory.component';
import { CauldronComponent } from './common-func/cauldron/cauldron.component';
import { AboutComponent } from './shared/components/about/about.component';

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
    path: "about", component: AboutComponent
  },

  {
    path: "**", component: AboutComponent
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
        component: ListAllRComponent,
      },

      {
        path: "ing-contain/:ingids",
        component: ListIngredientsContainingRComponent,
      },
      {
        path: "category/:id",
        component: ListInCategoryRComponent,
      },
      {
        path: "recent",
        component: ListMostRecentRComponent
      },
      {
        path: "commented",
        component: ListMostCommentedRComponent
      },
      {
        path: "commented-recently",
        component: ListCommentedRecentlyRComponent
      },
      {
        path: "highly-rated",
        component: ListHighlyRatedRComponent
      },
      {
        path: "most-rated",
        component: ListMostRatedRComponent
      },
      {
        path: "most-favoured",
        component: ListMostFavouredRComponent
      },
      {
        path: "search/:phrase",
        component: ListSearchedRComponent
      },
      {
        path: "user/:username",
        component: ListUserSharedRComponent
      },
      {
        path: "my-favourite",
        component: ListMyFavouriteRComponent,
        canActivate: [AuthorizedOnlyGuard]
      },
      {
        path: "my-commented",
        component: ListMyCommentedRComponent,
        canActivate: [AuthorizedOnlyGuard]
      },
      {
        path: "details/:id",
        component: RecipeDetailsComponent,
        resolve: { data: RecipeDetailsResolver }
      }, {
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
    children: [
      {
        path: "details/:id",
        component: IngredientDetailsComponent,
        outlet: "ing-outlet"
      },
      {
        path: "edit/:id",
        component: EditIngredientComponent,
        canActivate: [AuthorizedOnlyGuard],
        resolve: { data: IngredientEditResolver },
        outlet: "ing-outlet"
      },
      {
        path: "create",
        component: CreateIngredientComponent,
        canActivate: [AuthorizedOnlyGuard],
        outlet: "ing-outlet"
      },
    ]
  },
  {
    path: "categories",
    children: [
      {
        path: "", pathMatch: "full",
        component: MainBoardCategoriesComponent
      },
      {
        path: "details/:id",
        component: MainBoardCategoriesComponent,
      }
    ]
  },
  {
    path: "cauldron",
    component: CauldronComponent,
  }
  // {
  //   path: "categories",
  //   component: MainBoardCategoriesComponent
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
