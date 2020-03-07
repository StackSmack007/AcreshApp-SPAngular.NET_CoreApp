import { Observable, Subscription } from 'rxjs';
import { Component, OnDestroy, DoCheck, Input, Output, EventEmitter } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { HelperService } from 'src/app/core/services/helper.service';
import { RecipeService } from 'src/app/core/services/recipe.service';
import { CategoryService } from 'src/app/core/services/category.service';
import { IRecipeEdit } from 'src/app/core/interfaces/recipes/IRecipeEdit';
import { IngredientService } from 'src/app/core/services/ingredient.service';
import { RecipeDifficulty } from 'src/app/core/enumerations/RecipeDifficulty';
import { IRecipeCreate } from 'src/app/core/interfaces/recipes/IRecipeCreate';
import { ICategoryOption } from 'src/app/core/interfaces/categories/ICategoryOption';
import { takenNameValidatorAsync } from "src/app/core/validators/takenNameValidatorAsync";
import { IIngredientOption } from 'src/app/core/interfaces/ingredients/IIngredientOption';

@Component({
  selector: 'acr-create-edit-form',
  templateUrl: './create-edit-form.component.html',
  styleUrls: ['./create-edit-form.component.css'],
  animations: [
    trigger('slowShowHideX', [
      transition('void=>*', [style({ opacity: '0', transform: 'translateX(-20rem) scale(0.1)' }), animate(2000)]),
      transition('*=>void', [animate(2000), style({ opacity: '0', transform: 'translateX(20rem) scale(0.1)' })]),
    ]),
    trigger('slowShowHideY', [
      transition('void=>*', [style({ opacity: '0.2', transform: 'translateY(-3rem)' }), animate(1000)]),
      transition('*=>void', [animate(1000), style({ opacity: '0.2', transform: 'scale(0.1)' })]),
    ])
  ]
})
export class CreateEditFormComponent implements OnDestroy, DoCheck {
  subscriptions: Subscription[] = [];
  categorie$: Observable<ICategoryOption[]> = null; //[{ name: "no category", id: -1 }, { name: "cat1111111111111111", id: 1 }, { name: "cat2", id: 2 }, { name: "cat3", id: 3 }]
  public ingredients: IIngredientOption[] = null// [{ id: 1, name: "salati" }, { id: 2, name: "torshii" }];
  form: FormGroup

  get btnDisabled() {   
    return this.form.pristine || this.form.invalid || HelperService.compareObjects(this._recipe,this.form.value);
  }

  private _recipe: IRecipeEdit = null;
  @Input()
  settings: { headline: string, submitBtnTitle: string };

  @Input()
  set recipe(value: IRecipeEdit) {
    this._recipe = value;
    this.namesAllowed.push(value.name);
    this.loadData(value)
  }
  private namesAllowed: string[] = [];

  @Output()
  SubmitEvent: EventEmitter<IRecipeCreate> = new EventEmitter<IRecipeCreate>();

  diffGrades = Object.entries(RecipeDifficulty).filter((_, index, arr) => index < arr.length / 2);

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private recipeService: RecipeService,
    catService: CategoryService,
    ingredientService: IngredientService,
  ) {
    this.categorie$ = catService.getAllMini();
    this.subscriptions.push(ingredientService.getAllMini().subscribe(x => { this.ingredients = x; }))
    this.buildForm();
  }

  private loadData(data: IRecipeEdit) {
    data.ingredients.forEach(x => this.addIngredient(x));
    data.pictures.forEach(x => this.addPicture(x));
    data.tags.forEach(x => this.addTag(x));
    this.form.patchValue(data);
    this.getCtrl("difficulty").setValue(data.difficulty.toString());
  }

  get videoLink() {
    if (this.getCtrl('videoLink').invalid || this.form.value['videoLink'].length === 0) { return null }
    const id = this.form.value['videoLink'].substr(this.form.value['videoLink'].indexOf("v=") + 2 || this.form.value['videoLink'].lastIndexOf("\\") + 1);
    return HelperService.videoLinkMake(id);
  }

  get myPersonality() {
    const { userName, cookRank } = this.authService.getUserInfo();
    return { userName, cookRank };
  }

  getCtrl(name: string) {
    return this.form.get(name);
  }

  getErr(name: string, errName: string) {
    return this.getCtrl(name).errors[errName];
  }
  //Used to clasify input field as valid or not
  getValClasses(name: string): { 'is-invalid': boolean, 'is-valid': boolean } {
    const ctrl = this.getCtrl(name);
    // if (this.getCtrl(name).pristine) return { 'is-invalid': false, 'is-valid': false };
    return { 'is-invalid': (ctrl.invalid && ctrl.touched), 'is-valid': ctrl.valid }
  }
  //Used to clasify input field as valid or not
  getCtrlValClasses(ctr: FormControl): { 'is-invalid': boolean, 'is-valid': boolean } {
    return { 'is-invalid': (ctr.invalid && ctr.touched), 'is-valid': ctr.valid }
  }

  invalidTouchedCtrl(name: string) {
    return this.getCtrl(name).invalid && this.getCtrl(name).touched;
  }

  public formArrs: { pictures: FormArray, tags: FormArray, ingredients: FormArray } = { pictures: undefined, tags: undefined, ingredients: undefined };
  setFormArrs() {
    this.formArrs.pictures = this.form.get('pictures') as FormArray;
    this.formArrs.tags = this.form.get('tags') as FormArray;
    this.formArrs.ingredients = this.form.get('ingredients') as FormArray;
  }
  addPicture(picUrl = "") {
    this.formArrs.pictures.push(this.fb.control(picUrl, [Validators.required, Validators.pattern("(http(s?):)([/|.|\\w|\\s|-])*\.(?:jpg|gif|png)")]))
  }
  removePicture(index: number = 0) {
    this.formArrs.pictures.removeAt(index);
  }
  addTag(tagName = "") {
    this.formArrs.tags.push(this.fb.control(tagName, [Validators.required, Validators.pattern("[a-zA-Z]{3,10}")]))
  }
  removeTag(index: number = 0) {
    this.formArrs.tags.removeAt(index);
  }

  addIngredient(ing = { id: 0, ammount: "" }) {
    this.formArrs.ingredients.push(this.createIngredient(ing));
  }
  removeIngredient(index: number = 0) {
    this.formArrs.ingredients.removeAt(index);
  }
  private createIngredient({ id, ammount }): FormGroup {
    return this.fb.group({
      ammount: [ammount, [Validators.required, Validators.minLength(4), Validators.maxLength(16), Validators.pattern("[\\d\\.\\,\\/\\-]+\\s?\\w+")], []],
      id: [id, [Validators.min(1)], []],
    })
  }

  availableIngredients({ id }) {
    if (!this.formArrs.ingredients || this.ingredients === null) return [];
    const usedIds = this.formArrs.ingredients.value?.map(x => +x.id);
    return this.ingredients.filter(x => !usedIds.includes(x.id) || x.id === +id);
  }

  get validPicturesOnly() {
    if (!this.formArrs.pictures || this.formArrs.pictures.length === 0) return null;
    return this.formArrs.pictures.controls.filter(x => x.valid).map(x => x.value);
  }

  buildForm() {
    this.form = this.fb.group({
      id: "",
      authorId: this.authService.getUserInfo().id,
      name: ["", { validators: [Validators.required, Validators.minLength(4), takenNameValidatorAsync(this.recipeService.nameTaken.bind(this.recipeService), this.namesAllowed), Validators.pattern("[a-zA-Z ]+")], updateOn: "blur" }],
      categoryId: ["-1", [Validators.min(1), Validators.required], []],
      description: ["", [Validators.required, Validators.minLength(100), Validators.maxLength(25600)], []],
      mainPicture: ["", [Validators.required, Validators.pattern("(http(s?):)([/|.|\\w|\\s|-])*\.(?:jpg|gif|png)")], []],
      videoLink: ["", [], []],
      difficulty: ["1", [Validators.required], []],
      pictures: this.fb.array([]),
      tags: this.fb.array([]),
      ingredients: this.fb.array([])
    },  // { updateOn: "blur" }
    )
    this.setFormArrs();
  }

  ngDoCheck() {
    //Validates that we have atleast one ingredient chosen!
    if (this.form.valid && (!this.form.value.ingredients || this.form.value.ingredients.length === 0)) {
      this.form.setErrors({ "noIngredient": true })
    } else if (this.form.hasError("noIngredient")) {
      this.form.setErrors({ "noIngredient": false })
    }
  }


  submitRecipe() {
    if (this.form.invalid || this.form.pristine) return;
    this.SubmitEvent.emit(this.form.value);
  }

  ngOnDestroy(): void {
    this.subscriptions.filter(x => !x.closed).forEach(x => x.unsubscribe());
  }
}