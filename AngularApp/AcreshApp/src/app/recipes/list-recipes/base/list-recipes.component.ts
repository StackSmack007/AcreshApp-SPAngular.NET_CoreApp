import { Observable, BehaviorSubject } from 'rxjs';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { IRecipeMiniInfo } from 'src/app/core/interfaces/recipes/recipeMiniInfo';

@Component({
  selector: 'acr-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: []
})

export class ListRecipesComponent implements OnInit {

  public recipesContainer: { fetched: IRecipeMiniInfo[], page: number } = { fetched: [], page: 1 }

  public isLoading: boolean = false;
  public notFound: boolean = false;
  private endReached: boolean = false;

  constructor(private spinner: NgxSpinnerService) { }

  @Input()
  title: string;

  @Input()
  loadingMethod: BehaviorSubject<(page: number) => Observable<IRecipeMiniInfo[]>>;

  ngOnInit(): void {
    this.fetchRecipes();
    this.loadingMethod.subscribe(met => {
      this.recipesContainer = { fetched: [], page: 1 };
      this.fetchRecipes();
    })
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
    this.loadingMethod.getValue()(this.recipesContainer.page++)
      .subscribe(x => {
        if (x.length === 0) {
          this.endReached = true;
          this.stopLoadingInfo();
        }
        this.recipesContainer.fetched.splice(this.recipesContainer.fetched.length, 0, ...x);
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