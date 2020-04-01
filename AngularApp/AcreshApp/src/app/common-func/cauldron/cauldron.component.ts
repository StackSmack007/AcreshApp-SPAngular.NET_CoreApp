import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ICauldronIngredient } from 'src/app/core/interfaces/ingredients/ICauldronIngredient';
import { BehaviorSubject } from 'rxjs';
import { IngredientService } from 'src/app/core/services/ingredient.service';
import { ICauldronRecipeCard } from 'src/app/core/interfaces/recipes/ICauldronRecipeCard';
import { RecipeService } from 'src/app/core/services/recipe.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'acr-cauldron',
  templateUrl: './cauldron.component.html',
  styleUrls: ['./cauldron.component.css']
})
export class CauldronComponent implements OnInit {

  @ViewChild('ingBox') container: ElementRef
  get hasScroller() { return this.container.nativeElement.scrollHeight > this.container.nativeElement.clientHeight }

  phrase: BehaviorSubject<string> = new BehaviorSubject("");
  chosenIngs: BehaviorSubject<string> = new BehaviorSubject("");

  ingredientsUsed: ICauldronIngredient[] = [];

  recsFd: {
    page: number,
    endReached: boolean,
    isLoading: boolean,
    results: ICauldronRecipeCard[];
  } = { page: 0, endReached: false, isLoading: false, results: [] }


  selectIngredient(id: number) {
    const index = this.ingsFd.results.findIndex(x => x.id === id);
    if (index < 0) return; // not provided element chosen... deny!
    const ing = this.ingsFd.results[index];
    this.ingsFd.results.splice(index, 1);
    this.ingsFd.maxCount--;
    if (this.ingredientsUsed.some(x => x.id === id)) return;
    this.ingredientsUsed.splice(this.ingredientsUsed.length, 0, ing);
    setTimeout(() => { if (!this.hasScroller && this.ingsFd.maxCount > this.ingsFd.results.length) { this.fetchMoreIngs() } }, 2000)
    this.updateRecipes();
  }

  deselectIngredient(id: number) {
    const index = this.ingredientsUsed.findIndex(x => x.id === id);
    if (index < 0) return; // not provided element chosen... deny!
    const ing = this.ingredientsUsed[index];
    this.ingredientsUsed.splice(index, 1);
    if (!ing.name.toLowerCase().startsWith(this.phrase.getValue().toLowerCase())) return;
    this.ingsFd.results.push(ing);
    this.ingsFd.maxCount++;
    this.recsFd.endReached = false;
    this.updateRecipes();
  }

  get selectedIngNames() {
    const names = this.ingredientsUsed.map(x => x.name);
    if (names.length === 1) return `(${names.pop()})`;
    if (names.join(", ").length > 70) {
      while (names.join(", ").length > 70) {
        names.pop();
      }
      return `(${names.join(", ")}...)`;
    }
    return `(${names.slice(0, -1).join(", ") + " and " + names[names.length - 1]})`;
  }

  ingsFd: {
    page: number,
    maxCount: number,
    isLoading: boolean,
    results: ICauldronIngredient[];
  } = { page: 0, maxCount: 0, isLoading: false, results: [] }

  getIngs(f) {
    const newPhrase = f.value["phrase"];
    console.log(newPhrase);
    if (newPhrase !== this.phrase.getValue()) {
      this.phrase.next(newPhrase);
      f.controls["phrase"].reset();
    }
  }

  constructor(private ingService: IngredientService, private spinner: NgxSpinnerService,
    private recipesService: RecipeService) { }

  fetchMoreIngs() {
    if (this.ingsFd.results.length === this.ingsFd.maxCount) {
      this.ingsFd.isLoading = false;
      return;
    }
    this.ingsFd.isLoading = true;
    this.spinner.show();
    this.ingService.getCauldronIngredients(this.phrase.getValue(), this.ingsFd.page++).subscribe(ings => {
      ings = ings.filter(x => !this.ingredientsUsed.map(i => i.id).includes(x.id)); // do not show used already ings!
      this.ingsFd.results.splice(this.ingsFd.results.length, 0, ...ings);
    }).add(() => { this.ingsFd.isLoading = false; this.spinner.hide(); })
  }

  ngOnInit(): void {
    this.phrase.subscribe(phr => {
      this.ingsFd.page = 1;
      this.ingsFd.results = [];
      this.ingsFd.isLoading = true;
      this.spinner.show();
      this.ingService.getCauldronIngredientsCount(phr).subscribe(count => {
        this.ingsFd.maxCount = count;
        this.fetchMoreIngs();
      })
    })
  }

  onScrollIngs({ target }) {
    if (!this.scrolSayLoad(target)) { return }
    this.fetchMoreIngs();
  }

  private updateRecipes() {
    this.recsFd.page = 1;
    this.recsFd.results = [];
    this.recsFd.isLoading = false;
    this.spinner.hide();
    this.fetchMoreRecs();
  }

  fetchMoreRecs() {
    if (this.recsFd.endReached) {
      this.recsFd.isLoading = false;
      this.spinner.hide();
      return;
    }
    const ingIds = this.ingredientsUsed.map(x => x.id).join('|');
    this.recsFd.isLoading = true;
    this.spinner.show();
    this.recipesService.getCauldronRecipeCards(ingIds, this.recsFd.page++).subscribe(recs => {
      if (recs.length === 0) { this.recsFd.endReached = true; }
      else { this.recsFd.results.splice(this.ingsFd.results.length, 0, ...recs) }
      console.log("raz");
    }).add(() => {console.log("dva------"); this.recsFd.isLoading = false; this.spinner.hide() })
  }

  onScrollRecs({ target }) {
    if (!this.scrolSayLoad(target)) { return }
    this.fetchMoreRecs();
  }

  private scrolSayLoad = (target) => target.scrollHeight - (target.scrollTop + target.clientHeight) < 1
}
