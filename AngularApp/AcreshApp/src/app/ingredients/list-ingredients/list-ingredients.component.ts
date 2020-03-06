import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Subject, BehaviorSubject } from 'rxjs';
import { IngredientService } from 'src/app/core/services/ingredient.service';
import { IIngredeintMatches } from 'src/app/core/interfaces/ingredients/IIngredeintMatches';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router, ɵangular_packages_router_router_a } from '@angular/router';

@Component({
  selector: 'acr-list-ingredients',
  templateUrl: './list-ingredients.component.html',
  styleUrls: ['./list-ingredients.component.css']
})
export class ListIngredientsComponent {

  cards = {
    essentials: { page: 1, cards: [], loading: false },
    nonEssentials: { page: 1, cards: [], loading: false }
  }


  resultsFd: IIngredeintMatches = { essentials: 0, nonEssentials: 0, pageCappacity: 0 }
  indexLetters: string[] = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
  filterForm: FormGroup;

  ingrIdSelected = new BehaviorSubject<number>(0);

  constructor(private fb: FormBuilder, private ingService: IngredientService, private spinner: NgxSpinnerService, router: Router) {
    this.buildForm();
    this.monitorForm();

    this.ingrIdSelected.subscribe(id => {
 
      console.log(id);
       router.navigate(['/ingredients', { outlets: { 'ing-outlet': ['details', id]} }]);
    })
  }


  // selectedId: number=-1;

  get essentials() { return this.filterForm.get('essentials') as FormControl; }
  get nonEssentials() { return this.filterForm.get('non-essentials') as FormControl; }

  setLocks() {
    this.essentials.enable();
    this.nonEssentials.enable();
    (this.essentials.value && !this.nonEssentials.value) ? this.essentials.disable() : this.essentials.enable();
    (this.nonEssentials.value && !this.essentials.value) ? this.nonEssentials.disable() : this.nonEssentials.enable();
  }

  private buildForm() {
    this.filterForm = this.fb.group({
      "index": "-",
      "phrase": ["", { updateOn: "blur" }],
      "essentials": true,
      "non-essentials": true,
    })
  }

  private get formData() {
    const { index, phrase } = this.filterForm.value;
    return { index, phrase };
  }

  monitorForm() {
    let trackerSubj = new Subject();
    trackerSubj.subscribe(() => {
      this.filterForm.updateValueAndValidity();
      this.ingService.getCardsMaxCount(this.formData).subscribe(res => {
        this.resultsFd = res;
        this.cards.essentials = { page: 1, cards: [], loading: false },
          this.cards.nonEssentials = { page: 1, cards: [], loading: false }

        this.fetchNonEssentials();
        this.fetchEssentials();
      })
    })
    trackerSubj.next();
    this.filterForm.get("index").valueChanges.subscribe(trackerSubj);
    this.filterForm.get("phrase").valueChanges.subscribe(trackerSubj);
  }

  fetchEssentials() {
    if (this.cards.essentials.cards.length === this.resultsFd.essentials || this.cards.essentials.loading) return;
    this.cards.essentials.loading = true;
    this.spinner.show();
    this.ingService.getEssentialIngCards(this.cards.essentials.page++, this.formData.index, this.formData.phrase)
      .subscribe(r => {
        this.cards.essentials.cards.splice(this.cards.essentials.cards.length, 0, ...r);
        this.cards.essentials.loading = false;
      }).add(() => this.spinner.hide())
  }

  fetchNonEssentials() {
    if (this.cards.nonEssentials.cards.length === this.resultsFd.nonEssentials || this.cards.nonEssentials.loading) return;
    this.cards.nonEssentials.loading = true;
    this.spinner.show();
    this.ingService.getNonEssentialIngsCards(this.cards.nonEssentials.page++, this.formData.index, this.formData.phrase)
      .subscribe(r => {
        this.cards.nonEssentials.cards.splice(this.cards.nonEssentials.cards.length, 0, ...r);
        this.cards.nonEssentials.loading = false;
      }).add(() => this.spinner.hide())
  }

  onScrollEsts({ target }) {
    if (!this.scrolSayLoad(target)) { return }
    console.log("sroll Ess")
    this.fetchEssentials();
  }

  onScrollNonEsts({ target }) {
    if (!this.scrolSayLoad(target)) { return }
    console.log("sroll nonEss")
    this.fetchNonEssentials();
  }

  private scrolSayLoad = (target) => target.scrollHeight - (target.scrollTop + target.clientHeight) < 10

}
