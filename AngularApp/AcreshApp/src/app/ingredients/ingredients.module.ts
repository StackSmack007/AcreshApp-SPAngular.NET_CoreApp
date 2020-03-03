import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListIngredientsComponent } from './list-ingredients/list-ingredients.component';
import { CreateIngredientComponent } from './create-ingredient/create-ingredient.component';
import { IngredientCartComponent } from './ingredient-cart/ingredient-cart.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [ListIngredientsComponent, CreateIngredientComponent, IngredientCartComponent],
  imports: [
    CommonModule,CoreModule
  ],
  exports: [ListIngredientsComponent]
})
export class IngredientsModule { }
