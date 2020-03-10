import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { IIngredientDetails } from "src/app/core/interfaces/ingredients/IIngredientDetails";
import { IngredientService } from 'src/app/core/services/ingredient.service';
import { BehaviorSubject } from 'rxjs';
import { HelperService } from 'src/app/core/services/helper.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogQuestionComponent } from '../../core/components/questionComponent/dialog-question.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'acr-ingredient-details',
  templateUrl: './ingredient-details.component.html',
  styleUrls: ['./ingredient-details.component.css']
})
export class IngredientDetailsComponent {

  ingredient: IIngredientDetails = null;
  // {
  //   id: 12,
  //   name: "Cinamon",
  //   picUrl: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200",
  //   isVegan: false,
  //   isDeleted: false,
  //   origin: "Plant",
  //   lastModified: 32213,
  //   usageCount: 312,
  //   authorUserName: "User1",
  //   measureType: "Weight_Units",
  //   description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi necessitatibus nisi minus tempore molestias. Modi incidunt esse nulla veritatis ipsam iusto quia eveniet optio, qui consequatur ipsa aliquam provident suscipit?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi necessitatibus nisi minus tempore molestias. Modi incidunt esse nulla veritatis ipsam iusto quia eveniet optio, qui consequatur ipsa aliquam provident suscipit?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi necessitatibus nisi minus tempore molestias. Modi incidunt esse nulla veritatis ipsam iusto quia eveniet optio, qui consequatur ipsa aliquam provident suscipit?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi necessitatibus nisi minus tempore molestias. Modi incidunt esse nulla veritatis ipsam iusto quia eveniet optio, qui consequatur ipsa aliquam provident suscipit?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi necessitatibus nisi minus tempore molestias. Modi incidunt esse nulla veritatis ipsam iusto quia eveniet optio, qui consequatur ipsa aliquam provident suscipit?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi necessitatibus nisi minus tempore molestias. Modi incidunt esse nulla veritatis ipsam iusto quia eveniet optio, qui consequatur ipsa aliquam provident suscipit?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi necessitatibus nisi minus tempore molestias. Modi incidunt esse nulla veritatis ipsam iusto quia eveniet optio, qui consequatur ipsa aliquam provident suscipit?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi necessitatibus nisi minus tempore molestias. Modi incidunt esse nulla veritatis ipsam iusto quia eveniet optio, qui consequatur ipsa aliquam provident suscipit?"
  // }

  @Input()
  chosenIngrId: BehaviorSubject<number>

  constructor(route: ActivatedRoute, private authService: AuthService, private ingService: IngredientService, private router: Router, private dialog: MatDialog, private toastr: ToastrService) {
    route.params.subscribe(({ id }) => {
      if (!id || isNaN(id) || +id === 0) { this.ingredient = null; return; }
      if (this.ingredient && this.ingredient.id === id) return;
      this.ingService.getIngredientDetails(+id).subscribe(det => this.ingredient = det)
    })
  }

  private get myInfo() { return this.authService.getUserInfo(); }

  get isEditAuthorised() { return this.myInfo.userName === this.ingredient.authorUserName || this.authService.isAdmin; }
  get isDeleteAuthorised() { return this.ingredient.usageCount === 0 && this.isEditAuthorised }
  get modificationDate() { return HelperService.timeElapsed(this.ingredient.lastModified) }

  confirmDelete() {
    let dialogRef = this.dialog.open(DialogQuestionComponent,
      {
        width: "40em",
        data: {
          title: `Confirm Deletion Please:`,
          question: `Are you sure you wish to delete ${this.ingredient.name}?`,
          picUrl: this.ingredient.picUrl,
          positiveAnswerBtnName: '<i class="far fa-trash-alt"></i> Delete',
          negativeAnswerBtnName: '<i class="fas fa-ban"></i> Abort'
        }
      });

    dialogRef.afterClosed().subscribe(result => {
      if (result === "true") {
        this.ingService.deleteIngredientById(this.ingredient.id).subscribe(() => {
          this.toastr.success(`Removed ingredient ${this.ingredient.name}`, "Success!");
          this.router.navigate(['/ingredients', { outlets: { 'ing-outlet': ['details', 0] } }]);
        }, (err) => {
          this.toastr.error(`Ingredient ${this.ingredient.name} was not removed`, "Failure");
          console.log(err);
        });
      }
    })
  }
}