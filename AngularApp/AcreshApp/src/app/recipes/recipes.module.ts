import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeCartComponent } from './recipe-cart/recipe-main/recipe-cart.component';
import { RecipeSubInfoCartComponent } from './recipe-cart/recipe-sub-info-cart/recipe-sub-info-cart.component';
import { AppRoutingModule } from '../app-routing.module';
import { ListRecipesComponent } from './list-recipes/list-recipes.component';
import { CoreModule } from '../core/core.module';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

@NgModule({
  declarations: [RecipeCartComponent, RecipeSubInfoCartComponent, ListRecipesComponent, RecipeDetailsComponent],
  imports: [
    CommonModule,AppRoutingModule,CoreModule
  ],
  exports: [RecipeCartComponent,RecipeDetailsComponent]
})
export class RecipesModule { }
