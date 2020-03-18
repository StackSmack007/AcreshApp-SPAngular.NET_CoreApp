import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CategoryService } from 'src/app/core/services/category.service';
import { ToastrService } from 'ngx-toastr';
import { ICategoryCreate } from 'src/app/core/interfaces/categories/ICategoryCreate';
import { ICategoryEditDetails } from 'src/app/core/interfaces/categories/ICategoryEditDetails';

@Component({
  selector: 'acr-edit-category',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  private _categoryId: number;

  @Input()
  set categoryId(ownCategoryId: number) {
    this._categoryId = ownCategoryId;
    this.catService.getEditDetails(ownCategoryId).subscribe(x => {
      delete x.id;
      this.category = x;
    });
  }

  abort() { this.selectedCategory.next(this._categoryId); }

  category: ICategoryEditDetails = null;

  @Input()
  selectedCategory: BehaviorSubject<number>

  @Output()
  editEvent: EventEmitter<{ id: number, parentId: number, name: string}> = new EventEmitter();

  @Output()//just passing from parent to child
  navigateTreeEvent: EventEmitter<number> = new EventEmitter();

  settings = {
    headline: 'Edit',
    submitBtnTitle: "<i class='far fa-edit'></i>&nbsp;Edit Category",
    parentCategoryId: null
  }

  constructor(private catService: CategoryService, private toastr: ToastrService) { }

  editCategory(v: ICategoryCreate) {
    let edited: ICategoryEditDetails = { ...v, ...{ id: this._categoryId } }
    this.catService.editCategory(edited).subscribe(() => {
      this.editEvent.emit({ id: this._categoryId, parentId: v.parentCategoryId, name: v.name });
      this.selectedCategory.next(this._categoryId);
      this.toastr.success(`Edited category ${v.name}`, "Success!");
    }, (e) => {
      console.log("nsh error", e);
      this.toastr.error(`Unsucessfull edit of category ${v.name}`, "Failure!")
    })
  }
}
