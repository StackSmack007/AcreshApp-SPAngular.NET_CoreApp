import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListIngredientsComponent } from './list-ingredients/list-ingredients.component';
import { CreateIngredientComponent } from './create-ingredient/create-ingredient.component';
import { IngredientCartComponent } from './ingredient-card/ingredient-card.component';
import { CoreModule } from '../core/core.module';
import { IngredientDetailsComponent } from './ingredient-details/ingredient-details.component';
import { CreateEditIngredientFormComponent } from './create-edit-ingredient-form/create-edit-ingredient-form.component';

@NgModule({
  declarations: [ListIngredientsComponent, CreateIngredientComponent, IngredientCartComponent, IngredientDetailsComponent, CreateEditIngredientFormComponent],
  imports: [
    CommonModule,CoreModule
  ],
  exports: [ListIngredientsComponent,IngredientDetailsComponent,CreateIngredientComponent]
})
export class IngredientsModule { }
