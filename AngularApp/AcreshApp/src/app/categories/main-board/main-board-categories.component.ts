import { Component, ViewChild } from '@angular/core';
import { CategoryNode } from 'src/app/core/interfaces/categories/CategoryNode';
import { CategoryService } from 'src/app/core/services/category.service';
import { ICategoryDetails } from 'src/app/core/interfaces/categories/ICategoryDetails';
import { Observable, BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogQuestionComponent } from 'src/app/core/components/questionComponent/dialog-question.component';
import { ToastrService } from 'ngx-toastr';
import { CategoryThreeComponent } from '../category-three/category-three.component';

@Component({
  selector: 'main-board-categories',
  templateUrl: './main-board-categories.component.html',
  styleUrls: ['./main-board-categories.component.css']
})
export class MainBoardCategoriesComponent {

  categories: CategoryNode[] = null;

  private actionLocked = false;
  action: null | "details" | "create" | "edit" = null
  selectedCategory: BehaviorSubject<number> = new BehaviorSubject<number>(-1)

  @ViewChild(CategoryThreeComponent) tree: CategoryThreeComponent;

  navigateTreeElementNoDetails(id: number) {
    debugger;
    this.actionLocked = true;
    this.tree.expandParents(id);
    this.selectedCategory.next(id);
    this.actionLocked = false;
  }

  constructor(private catService: CategoryService, private dialog: MatDialog, private toastr: ToastrService) {
    this.updateTree()
    this.selectedCategory.subscribe(id => {
      if (this.actionLocked) return;
      if (id > 0) { this.action = "details"; }
      this.dataObj.info$ = this.catService.getDetails(id);
    })
  }

  updateTree() {
    this.catService.getThreeStructure().subscribe((x: CategoryNode[]) => {
      this.categories = x;
    });
  }

  dataObj: { info$: Observable<ICategoryDetails>, createInfo: number, editInfo: number } =
    {
      info$: null,
      createInfo: null,
      editInfo: null,
    }

  add(parentCategoryId: number) {
    this.action = "create";
    this.dataObj.createInfo = parentCategoryId;//Todo can remove name from data transfer since it is retrieved from a list.
  }

  edit(id: number) {
    this.dataObj.editInfo = id;
    this.action = "edit";
  }

  confirmDelete({ name, id }) {
    let dialogRef = this.dialog.open(DialogQuestionComponent,
      {
        width: "35em",
        data: {
          title: `Confirm Deletion Please:`,
          question: `Are you sure you wish to delete ${name} category?`,
          picUrl: '../../../assets/imgs/leaf 100x100.png',
          positiveAnswerBtnName: '<i class="far fa-trash-alt"></i> Delete',
          negativeAnswerBtnName: '<i class="fas fa-ban"></i> Abort'
        }
      });

    const parentId = this.tree.getParentId(id);

    dialogRef.afterClosed().subscribe(result => {
      if (result === "true") {
        this.catService.deleteCategoryById(id).subscribe(() => {
          this.toastr.success(`Removed category ${name}`, "Success!");
          this.updateTree();
          this.selectedCategory.next(parentId);
          this.navigateTreeElementNoDetails(parentId);
        }, (err) => {
          this.toastr.error(`Category ${name} was not removed`, "Failure");
          console.log(err);
        });
      }
    })
  }
}