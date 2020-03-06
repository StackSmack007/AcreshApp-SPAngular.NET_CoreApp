import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListIngredientsComponent } from './list-ingredients/list-ingredients.component';
import { CreateIngredientComponent } from './create-ingredient/create-ingredient.component';
import { IngredientCartComponent } from './ingredient-card/ingredient-card.component';
import { CoreModule } from '../core/core.module';
import { IngredientDetailsComponent } from './ingredient-details/ingredient-details.component';
import { TestOneComponent } from './test-one/test-one.component';
import { TestTwoComponent } from './test-two/test-two.component';

@NgModule({
  declarations: [ListIngredientsComponent, CreateIngredientComponent, IngredientCartComponent, IngredientDetailsComponent, TestOneComponent, TestTwoComponent],
  imports: [
    CommonModule,CoreModule
  ],
  exports: [ListIngredientsComponent,TestOneComponent,TestTwoComponent,IngredientDetailsComponent]
})
export class IngredientsModule { }
