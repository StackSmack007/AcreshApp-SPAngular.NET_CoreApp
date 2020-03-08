import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeCartComponent } from './recipe-cart/recipe-main/recipe-card.component';
import { RecipeSubInfoCardComponent } from './recipe-cart/recipe-sub-info-card/recipe-sub-info-card.component';
import { AppRoutingModule } from '../app-routing.module';
import { CoreModule } from '../core/core.module';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { CreateRecipeComponent } from './create/create.component';
import { EditRecipeComponent } from './edit/edit.component';
import { CreateEditFormComponent } from './create-edit-form/create-edit-form.component';
import { CommentsModule } from '../comments/comments.module';
import { ListRecipesComponent } from './list-recipes/base/list-recipes.component';
import { ListAllRComponent, ListMostRecentRComponent, ListMostFavouredRComponent, ListSearchedRComponent, ListMostCommentedRComponent, ListMostRatedRComponent, ListHighlyRatedRComponent, ListCommentedRecentlyRComponent, ListUserSharedRComponent, ListMyFavouriteRComponent, ListMyCommentedRComponent, ListIngredientsContainingRComponent } from './list-recipes/recipes-list-exporter';


@NgModule({
  declarations: [RecipeCartComponent, RecipeSubInfoCardComponent, RecipeDetailsComponent,
    CreateRecipeComponent, EditRecipeComponent, CreateEditFormComponent, ListRecipesComponent,
    ListAllRComponent, ListCommentedRecentlyRComponent, ListHighlyRatedRComponent, ListMostCommentedRComponent, ListMostRecentRComponent, ListSearchedRComponent, ListMostFavouredRComponent, ListMostRatedRComponent, ListUserSharedRComponent, ListMyFavouriteRComponent, ListMyCommentedRComponent,ListIngredientsContainingRComponent],
  imports: [
    CommonModule, AppRoutingModule, CoreModule, CommentsModule
  ],
  exports: [RecipeCartComponent, RecipeDetailsComponent, CreateRecipeComponent]
})
export class RecipesModule { }
