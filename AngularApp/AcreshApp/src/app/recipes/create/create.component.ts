import { Subscription } from 'rxjs';
import { Component, OnDestroy } from '@angular/core';
import { RecipeService } from 'src/app/core/services/recipe.service';
import { RecipeDifficulty } from 'src/app/core/enumerations/RecipeDifficulty';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { IRecipeCreate } from 'src/app/core/interfaces/recipes/IRecipeCreate';

@Component({
  selector: 'acr-create-rec',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateRecipeComponent implements OnDestroy {

  subscriptions: Subscription[] = [];
  settings={ headline: "Create new Recipe", submitBtnTitle: "Post This Recipe" };

  diffGrades = Object.entries(RecipeDifficulty).filter((_, index, arr) => index < arr.length / 2);
  constructor(private recipeService: RecipeService, private toastr: ToastrService, private router: Router) {
  }

  submitRecipe(newRecipe: IRecipeCreate) {
    this.subscriptions.push(this.recipeService.submitRecipe(newRecipe).subscribe((id: string) => {
      this.toastr.success("Successfully published a new recipe", "Congratulations!")
      this.router.navigate(["/recipes/details", id]);
    }, (e) => {
      this.toastr.error("Something went wrong please try again");
    }))
  }

  ngOnDestroy(): void {
    this.subscriptions.filter(x => !x.closed).forEach(x => x.unsubscribe())
  }
}