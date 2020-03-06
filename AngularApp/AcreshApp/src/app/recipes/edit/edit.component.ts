import { Subscription } from 'rxjs';
import { Component, ViewChild } from '@angular/core';
import { RecipeService } from 'src/app/core/services/recipe.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

import { SignalRRecipeDetailsService } from 'src/app/core/services/signal-r.recipe-details.service';
import { CreateEditFormComponent } from '../create-edit-form/create-edit-form.component';
import { IngredientService } from 'src/app/core/services/ingredient.service';
import { IRecipeEdit } from 'src/app/core/interfaces/recipes/IRecipeEdit';


const isSame = (el1, el2) => JSON.stringify(el1) === JSON.stringify(el2);


@Component({
  selector: 'acr-edit-rec',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditRecipeComponent {
  settings = { headline: "Edit Recipe", submitBtnTitle: "<i class='fas fa-wrench'></i> Edit This Recipe" };

  subscriptions: Subscription[] = [];
  public recipe: IRecipeEdit = null;

  @ViewChild(CreateEditFormComponent)
  childForm: CreateEditFormComponent

  constructor(
    private singalRService: SignalRRecipeDetailsService,
    private recipeService: RecipeService,
    private ingredientService: IngredientService,
    route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router) {
    this.recipe = route.snapshot.data.data;
    
  }

  submitRecipe(value: IRecipeEdit) {
    this.subscriptions.push(this.recipeService.editRecipe(value).subscribe((r: string) => {
      this.toastr.success("Successfully edited a recipe", "Congratulations!")
    
      let patchValueForSignalR = {
        name: value.name,
        description: value.description,
        pictures: value.pictures,
        difficulty: +value.difficulty,
        videoLink: value.videoLink,
        tags: value.tags,
      }
      
      debugger;
      if (isSame(value.ingredients, this.recipe.ingredients) && Number(value.categoryId) === this.recipe.categoryId) {
        console.log("bez call!");  this.sendSignalRData(patchValueForSignalR); //If ingredients and category is no need to API call...
      } else {
        this.childForm.categorie$.subscribe(v => {
         console.log("pravq Call do bazata!");
         patchValueForSignalR["categoryName"] = v.find(x => x.id === +value.categoryId).name
         this.ingredientService.getRecipeIngredients(value.id).subscribe(ings => {
           patchValueForSignalR["ingredients"] = ings;
           this.sendSignalRData(patchValueForSignalR); 
          })
        }).add(()=>this.closeStreams())
      }
      this.router.navigate(["/recipes/details", r]);      
    }, (e) => { this.toastr.error("Something went wrong please try again"); console.log(e) }))
  };

private sendSignalRData(data:any){
  this.singalRService.startConnection({ id: this.recipe.id }).then(()=> this.singalRService.patchRecipeData(data)).finally(()=>this.closeStreams());
}

 private closeStreams(): void {
    this.subscriptions.filter(x => !x.closed).forEach(x => x.unsubscribe());
    this.singalRService.stopConnection();
  }
}