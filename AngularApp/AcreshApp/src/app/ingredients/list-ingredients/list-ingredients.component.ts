import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'acr-list-ingredients',
  templateUrl: './list-ingredients.component.html',
  styleUrls: ['./list-ingredients.component.css']
})
export class ListIngredientsComponent implements OnInit {

  indexLetters: string[] = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

  filterForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.buildForm();
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
      "index": "AZ",
      "phrase":  ["", {updateOn: "blur"}],
      "essentials": true,
      "non-essentials": true,
    },)
  }

  ngOnInit(): void {
  }

}
