import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';

import { CategoryTreeComponent } from './category-tree/category-tree.component';
import { CreateEditFormComponent } from './create-edit-form/create-edit-form.component';
import { DetailsComponent } from './details/details.component';
import { MainBoardCategoriesComponent } from './main-board/main-board-categories.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [MainBoardCategoriesComponent, CategoryTreeComponent, CreateEditFormComponent, DetailsComponent, CreateComponent, EditComponent],
  imports: [CoreModule]
})
export class CategoriesModule { }
