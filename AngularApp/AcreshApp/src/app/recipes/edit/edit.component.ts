import {  Subscription } from 'rxjs';
import { Component, OnDestroy,  ViewChild } from '@angular/core';
import { RecipeService } from 'src/app/core/services/recipe.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { IRecipeEdit } from 'src/app/core/interfaces/IRecipeCreate';
import { SignalRRecipeDetailsService } from 'src/app/core/services/signal-r.recipe-details.service';
import { CreateEditFormComponent } from '../create-edit-form/create-edit-form.component';


@Component({
  selector: 'acr-edit-rec',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditRecipeComponent implements OnDestroy {
  settings = { headline: "Edit Recipe", submitBtnTitle: "<i class='fas fa-wrench'></i> Edit This Recipe" };

  subscriptions: Subscription[] = [];
  public recipe: IRecipeEdit = null;

  @ViewChild(CreateEditFormComponent)
  childForm: CreateEditFormComponent

  constructor(
    private singalRService: SignalRRecipeDetailsService,
    private recipeService: RecipeService,
    route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router) {
    this.recipe = route.snapshot.data.data;
    this.singalRService.startConnection({ id: this.recipe.id });
  }


  submitRecipe(value: IRecipeEdit) {
    this.subscriptions.push(this.recipeService.editRecipe(value).subscribe((r: string) => {
      this.toastr.success("Successfully edited a recipe", "Congratulations!")
      this.router.navigate(["/recipes/details", r]);

      let patchValueForSignalR = {
        name: value.name,
        description: value.description,
        pictures: value.pictures,
        difficulty: +value.difficulty,
        videoLink: value.videoLink,
        tags: value.tags,
      }

    this.childForm.categorie$.subscribe(v => {
      debugger;
        patchValueForSignalR["categoryName"] = v.find(x => x.id === +value.categoryId).name
        this.singalRService.patchRecipeData(patchValueForSignalR)
      })
    }, (e) => {
      this.toastr.error("Something went wrong please try again");
    }))
  }

  ngOnDestroy(): void {
    this.subscriptions.filter(x => !x.closed).forEach(x => x.unsubscribe());
    this.singalRService.stopConnection();
  }
}