import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { IngredientService } from 'src/app/core/services/ingredient.service';
import { IIngredeintMatches } from 'src/app/core/interfaces/ingredients/IIngredeintMatches';

@Component({
  selector: 'acr-list-ingredients',
  templateUrl: './list-ingredients.component.html',
  styleUrls: ['./list-ingredients.component.css']
})
export class ListIngredientsComponent implements OnInit {

  cards = {
    essentials: { page: 1, cards: [] },
    nonEssentials: { page: 1, cards: [] }
  }

  resultsFd: IIngredeintMatches = { essentials: 0, nonEssentials: 0 }

  indexLetters: string[] = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

  filterForm: FormGroup;

  constructor(private fb: FormBuilder, private ingService: IngredientService) {
    this.buildForm();
    this.monitorForm();
  }

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
      console.log("fetchvam",this.formData);
      this.ingService.getCardsMaxCount(this.formData).subscribe(res => {
        this.resultsFd = res;
        this.cards = {
          essentials: { page: 1, cards: [] },
          nonEssentials: { page: 1, cards: [] }
        }
      })
    })
    trackerSubj.next();
    this.filterForm.get("index").valueChanges.subscribe(trackerSubj);
    this.filterForm.get("phrase").valueChanges.subscribe(trackerSubj);
  }




  ngOnInit(): void {
  }

}
