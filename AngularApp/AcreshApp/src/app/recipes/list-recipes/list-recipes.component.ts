import { Component, HostListener } from '@angular/core';
import { RecipeService } from 'src/app/core/services/recipe.service';
import { ActivatedRoute } from '@angular/router';
import { IRecipeMiniInfo } from 'src/app/core/interfaces/recipes/recipeMiniInfo';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'acr-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: []
})

export class ListRecipesComponent {
  private titles = {
    "all": () => "<i class='fas fa-scroll'></i>&nbsp; All Recipes...",
    "recent": () => "<i class='fas fa-concierge-bell'></i> &nbsp; Recently Published Recipes... (in the past 2 months)",
    "commented": () => "<i class='far fa-comments'></i> &nbsp; Most Commented Recipes...",
    "commented-recently": () => "<i class='far fa-clock'></i>&nbsp; Recently Commented Recipes...",
    "highly-rated": () => "<i class='fas fa-medal'></i>&nbsp; Hihly Rated Recipes...",
    "most-rated": () => "<i class='fas fa-users'></i>&nbsp; Recipes With Most Votes...",
    "favourized": () => "<i class='fas fa-grin-hearts'></i>&nbsp; Everyone's First Choise...",
    "search": () => `<i class='fas fa-search'></i>&nbsp; Results Of Search for...<span class="text-info font-italic">"${this.phrase}"</span>`,
    "user": () => (this.authService.isAuthenticated() && this.authService.getUserInfo().userName.toLowerCase() === this.userName.toLowerCase()) ? `<i class='fas fa-share-alt'></i></i>&nbsp; My Shared Recipes...` : `<i class='fas fa-user'></i></i>&nbsp; ${this.userName}'s Recipes...`,
    "my-favourite": () => "<i class='far fa-heart'></i>&nbsp; My Favourite Recipes...",
    "my-commented": () => "<i class='far fa-comment-alt'></i>&nbsp; My Commented Recipes...",
  }

  get title() {
    const crit_lcase = this.criteria.toLowerCase();
    if (!this.titles[crit_lcase]) return "No Results..." + crit_lcase;
    return this.titles[crit_lcase]();
  }
  public recipesFetched: IRecipeMiniInfo[] = [];

  public isLoading: boolean = false;
  public notFound: boolean = false;
  private endReached: boolean = false;
  public phrase: string = undefined;
  public userName: string = undefined;

  private currentPage: number = 1;
  recipe$: Observable<IRecipeMiniInfo> = null;
  private criteria: string = null;

  constructor(route: ActivatedRoute, private recipeService: RecipeService, private spinner: NgxSpinnerService, private authService: AuthService) {
    this.criteria = route.snapshot.url[0].path.toLowerCase()
    route.params.subscribe(x => {
      this.phrase = x["phrase"];
      this.userName = x["username"];
      this.recipesFetched = [];
      this.currentPage = 1;
      this.fetchRecipes();
    });
  }

  get scrolSayLoad() {
    return document.body.scrollHeight - (window.scrollY + window.innerHeight) < 0
  }

  @HostListener("window:scroll", [])
  handleKeyDown() {
    if (this.endReached || !this.scrolSayLoad || this.isLoading) { return }
    this.fetchRecipes();
  }

  private fetchRecipes() {
    this.startLoadingInfo();
    let serviceMethodProper:(a:number,b:string,c:string|void)=>Observable<IRecipeMiniInfo[]> = (this.criteria.startsWith("my-") ? this.recipeService.getPrivateRecipes : this.recipeService.getRecipes).bind(this.recipeService);
    serviceMethodProper(this.currentPage++, this.criteria, (this.phrase || this.userName))
      .subscribe(x => {
        if (x.length === 0) {
          this.endReached = true;
          this.stopLoadingInfo();
        }
        this.recipesFetched = this.recipesFetched.concat(x);
        this.stopLoadingInfo();
      }
        , (e) => {
          this.stopLoadingInfo();
          console.log(e, "problemNSH");
          this.notFound = true;
        })
  }

  private startLoadingInfo() {
    this.isLoading = true;
    if (this.endReached) return;
    this.spinner.show();
  }

  private stopLoadingInfo() {
    this.isLoading = false;
    this.spinner.hide();
  }
}