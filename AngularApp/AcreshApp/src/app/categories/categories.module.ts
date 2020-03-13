import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';

import { CategoryThreeComponent } from './category-three/category-three.component';
import { CreateEditFormComponent } from './create-edit-form/create-edit-form.component';
import { DetailsComponent } from './details/details.component';
import { MainBoardCategoriesComponent } from './main-board/main-board-categories.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [MainBoardCategoriesComponent, CategoryThreeComponent, CreateEditFormComponent, DetailsComponent, CreateComponent, EditComponent],
  imports: [CoreModule]
})
export class CategoriesModule { }
