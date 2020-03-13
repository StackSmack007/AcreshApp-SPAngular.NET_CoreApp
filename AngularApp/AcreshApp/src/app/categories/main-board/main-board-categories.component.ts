import { Component } from '@angular/core';
import { CategoryNode } from 'src/app/core/interfaces/categories/CategoryNode';
import { CategoryService } from 'src/app/core/services/category.service';
import { ICategoryDetails } from 'src/app/core/interfaces/categories/ICategoryDetails';
import { Observable, BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogQuestionComponent } from 'src/app/core/components/questionComponent/dialog-question.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'main-board-categories',
  templateUrl: './main-board-categories.component.html',
  styleUrls: ['./main-board-categories.component.css']
})
export class MainBoardCategoriesComponent {

  action: null | "details" | "create" | "edit" = null

  categories: CategoryNode[] = null;

  selectedCategory: BehaviorSubject<number> = new BehaviorSubject<number>(-1)

  constructor(private catService: CategoryService, private dialog: MatDialog, private toastr: ToastrService) {
    this.updateTree()
    this.selectedCategory.subscribe(id => {
      if (id > 0) { this.action = "details"; }
      this.dataObj.info$ = this.catService.getDetails(id);
    })
  }

  updateTree() {
    this.catService.getThreeStructure().subscribe((x: CategoryNode[]) => {
      this.categories = x;
    });
  }

  dataObj: { info$: Observable<ICategoryDetails>, createInfo: { pId: number, pName: string } } =
    {
      info$: null,
      createInfo: { pId: null, pName: null },
    }

  add(v: { pId, pName }) {
    this.action = "create";
    this.dataObj.createInfo = v;
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

    dialogRef.afterClosed().subscribe(result => {
      if (result === "true") {
        this.catService.deleteCategoryById(id).subscribe(() => {
          this.toastr.success(`Removed category ${name}`, "Success!");
          this.updateTree();
          this.action = null;
        }, (err) => {
          this.toastr.error(`Category ${name} was not removed`, "Failure");
          console.log(err);
        });
      }
    })
  }
}