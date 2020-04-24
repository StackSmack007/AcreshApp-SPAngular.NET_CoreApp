import { Component, ViewChild } from '@angular/core';
import { CategoryNode } from 'src/app/core/interfaces/categories/CategoryNode';
import { CategoryService } from 'src/app/core/services/category.service';
import { ICategoryDetails } from 'src/app/core/interfaces/categories/ICategoryDetails';
import { Observable, BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogQuestionComponent } from 'src/app/core/components/questionComponent/dialog-question.component';
import { ToastrService } from 'ngx-toastr';
import { CategoryTreeComponent } from '../category-tree/category-tree.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'main-board-categories',
  templateUrl: './main-board-categories.component.html',
  styleUrls: ['./main-board-categories.component.scss']
})
export class MainBoardCategoriesComponent {

  categories: CategoryNode[] = null;

  private actionLocked = false;
  action: null | "details" | "create" | "edit" = null
  selectedCategory: BehaviorSubject<number> = new BehaviorSubject<number>(-1)

  @ViewChild(CategoryTreeComponent) tree: CategoryTreeComponent;

  navigateTreeElementNoDetails(id: number, expandSelf = true) {
    this.tree.expandParents(id, expandSelf);
    if (id !== this.selectedCategory.getValue()) {
      this.actionLocked = true;
      this.selectedCategory.next(id);
      this.actionLocked = false;
    }
  }

  constructor(private catService: CategoryService, private dialog: MatDialog, private toastr: ToastrService, activatedRoute: ActivatedRoute) {
    if (activatedRoute.snapshot.url[0] && activatedRoute.snapshot.url[0].path.toLowerCase() === "details" &&
      !isNaN(activatedRoute.snapshot.params["id"])) {
      this.selectedCategory.next(+activatedRoute.snapshot.params["id"])
    }

    this.updateTree()
    this.selectedCategory.subscribe(id => {
      if (this.actionLocked) return;
      if (id > 0) {
        this.dataObj.info$ = this.catService.getDetails(id);
        this.action = "details";
      }
    })
  }

  updateTree() {
    this.catService.getTreeStructure().subscribe((x: CategoryNode[]) => {
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
    this.dataObj.createInfo = parentCategoryId;//Todo can remove name from data transfer since it is retrieved from a list.
    this.action = "create";
  }

  addNodeToTree({ id, parentId, name }) { this.tree.addNode(id, parentId, name) }

  edit(id: number) {
    this.dataObj.editInfo = id;
    this.action = "edit";
  }
  editNodeInTree({ id, parentId, name }) { this.tree.editNode(id, parentId, name) }

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

    dialogRef.afterClosed().subscribe(result => {
      if (result === "true") {
        this.catService.deleteCategoryById(id).subscribe(() => {
          this.toastr.success(`Removed category ${name}`, "Success!");
          const parentId = this.tree.deleteNode(id);
          this.selectedCategory.next(parentId);//Navigation happens with OnInit subscription treeComponent somehow...
        }, (err) => {
          this.toastr.error(`Category ${name} was not removed`, "Failure");
          console.log(err);
        });
      }
    })
  }
}