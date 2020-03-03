import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

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

  public get checkLocks() {
    return {
      essentialsMustLock: this.essentials.value && !this.nonEssentials.value,
      nonEssentialsMustLock: this.nonEssentials.value && !this.essentials.value,
    }
  }

   get essentials() { return this.filterForm.get('essentials'); }
   get nonEssentials() { return this.filterForm.get('non-essentials'); }

  setLocks() {
    // if(this.essentials.value && this.nonEssentials.value) return;
    this.essentials.enable();
    this.nonEssentials.enable();
    this.checkLocks.essentialsMustLock ? this.essentials.disable() : this.essentials.enable();
    this.checkLocks.nonEssentialsMustLock ? this.nonEssentials.disable() : this.nonEssentials.enable();
  }

  private buildForm() {
    this.filterForm = this.fb.group({
      "index": "AZ",
      "phrase": "",
      "essentials": true,
      "non-essentials": true,
    })
  }

  ngOnInit(): void {
  }

}
