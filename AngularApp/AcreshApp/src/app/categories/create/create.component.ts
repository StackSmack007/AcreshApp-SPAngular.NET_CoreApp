import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICategoryCreate } from 'src/app/core/interfaces/categories/ICategoryCreate';
import { CategoryService } from 'src/app/core/services/category.service';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'acr-create-category',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  @Input()
  parentData: { pId: number, pName: string }

  @Input()
  selectedCategory: BehaviorSubject<number>

  @Output()
  updateTreeEvent: EventEmitter<any> = new EventEmitter();

  settings = { headline: 'Create', submitBtnTitle: "<i class='fas fa-plus-circle'></i>&nbsp;Add Category", parentCategory: () => this.parentData };

  constructor(private catService: CategoryService, private toastr: ToastrService) { }

  createNewCategory(v: ICategoryCreate) {
    this.catService.create(v).subscribe(id => {
      this.selectedCategory.next(id);
      this.toastr.success(`Created category ${v.name}`, "Success!");
      this.updateTreeEvent.emit();
    }, (e) => {
      console.log("nsh error", e);
      this.toastr.error('Unsucessfull creation of e')
    })
    this.updateTreeEvent.emit();
  }
}