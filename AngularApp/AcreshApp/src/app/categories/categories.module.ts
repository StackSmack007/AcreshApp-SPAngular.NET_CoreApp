import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { ListAllCategoriesComponent } from './list-allCategories/list-all-categories.component';
import { CategoryThreeComponent } from './category-three/category-three.component';
import { CreateEditFormComponent } from './create-edit-form/create-edit-form.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [ListAllCategoriesComponent, CategoryThreeComponent, CreateEditFormComponent, DetailsComponent],
  imports: [CoreModule]
})
export class CategoriesModule { }
