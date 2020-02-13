import { Component, OnInit, HostListener } from '@angular/core';
import { RecipeService } from 'src/app/core/services/recipe.service';
import { ActivatedRoute } from '@angular/router';
import { IRecipeMiniInfo } from 'src/app/core/interfaces/recipes/recipeMiniInfo';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'acr-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css']
})

export class ListRecipesComponent implements OnInit {
  public recipesFetched: IRecipeMiniInfo[] = [];

  public isLoading: boolean = false;
  private endReached: boolean = false;

  private currentPage: number = 1;
  recipe$: Observable<IRecipeMiniInfo> = null;
  private criteria: string = null;
  constructor(route: ActivatedRoute, private recipeService: RecipeService, private spinner: NgxSpinnerService) {
    this.criteria = route.snapshot.url[0].path
  }

  ngOnInit(): void {
    this.fetchRecipes();
  }

  get shouldLoad() {
    return document.body.scrollHeight - (window.scrollY + window.innerHeight) < 0
  }

  @HostListener("window:scroll", [])
  handleKeyDown() {
    if (this.endReached || !this.shouldLoad || this.isLoading) { return }
    this.fetchRecipes();
  }

  private fetchRecipes() {
    this.isLoading = true;
    this.recipeService.getRecipes(this.criteria, this.currentPage++).subscribe(x => {
      if (x.length === 0) {
        this.endReached = true;
        this.isLoading = false;
        this.spinner.hide();
        return;
      }
      this.recipesFetched = this.recipesFetched.concat(x);
      this.isLoading = false;
      this.spinner.show();
    })
  }

}