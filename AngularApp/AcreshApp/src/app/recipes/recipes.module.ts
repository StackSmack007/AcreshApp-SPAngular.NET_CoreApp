import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeCartComponent } from './recipe-cart/recipe-main/recipe-card.component';
import { RecipeSubInfoCardComponent } from './recipe-cart/recipe-sub-info-card/recipe-sub-info-card.component';
import { AppRoutingModule } from '../app-routing.module';
import { ListRecipesComponent } from './list-recipes/list-recipes.component';
import { CoreModule } from '../core/core.module';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { CreateRecipeComponent } from './create/create.component';
import { EditRecipeComponent } from './edit/edit.component';
import { CreateEditFormComponent } from './create-edit-form/create-edit-form.component';
import { CommentsModule } from '../comments/comments.module';
import { ListAllComponent } from './list-recipes/filters/list-all/list-all.component';



@NgModule({
  declarations: [RecipeCartComponent, RecipeSubInfoCardComponent, ListRecipesComponent, RecipeDetailsComponent,
     CreateRecipeComponent, EditRecipeComponent,CreateEditFormComponent, ListAllComponent ],
  imports: [
    CommonModule,AppRoutingModule,CoreModule,CommentsModule
  ],
  exports: [RecipeCartComponent,RecipeDetailsComponent,CreateRecipeComponent]
})
export class RecipesModule { }
