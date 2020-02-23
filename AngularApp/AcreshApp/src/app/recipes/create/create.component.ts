import { Observable, Subscription } from 'rxjs';
import { Component, OnDestroy, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { takenValueValidator } from 'src/app/core/validators/takenName';
import { RecipeService } from 'src/app/core/services/recipe.service';
import { HelperService } from 'src/app/core/services/helper.service';
import { CategoryService } from 'src/app/core/services/category.service';
import { RecipeDifficulty } from 'src/app/core/enumerations/RecipeDifficulty';
import { ICategoryMini } from 'src/app/core/interfaces/categories/ICategoryMini';
import { IngredientService } from 'src/app/core/services/ingredient.service';
import { IIngredientMini } from 'src/app/core/interfaces/categories/IIngredientMini';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { trigger, style, animate, transition, } from '@angular/animations';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'acr-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
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
export class CreateRecipeComponent implements OnDestroy, DoCheck {
  private takenRecipeNames: string[] = ["taken"];
  private ingredients: IIngredientMini[] = null// [{ id: 1, name: "salati" }, { id: 2, name: "torshii" }];
  form: FormGroup
  categorie$: Observable<ICategoryMini> = null; //[{ name: "no category", id: -1 }, { name: "cat1111111111111111", id: 1 }, { name: "cat2", id: 2 }, { name: "cat3", id: 3 }]
  subscription$: Subscription[] = [];

  diffGrades = Object.entries(RecipeDifficulty).filter((_, index, arr) => index < arr.length / 2);
  constructor(private fb: FormBuilder, private authService: AuthService, private recipeService: RecipeService, catService: CategoryService, ingredientService: IngredientService, private toastr: ToastrService, private router: Router) {
    this.categorie$ = catService.getAllMini();
    this.subscription$.push(ingredientService.getAllMini().subscribe(x => {
      this.ingredients = x;
    }))
    this.buildForm();
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
  addPicture() {
    this.formArrs.pictures = this.form.get('pictures') as FormArray;
    this.formArrs.pictures.push(this.fb.control("", [Validators.required, Validators.pattern("(http(s?):)([/|.|\\w|\\s|-])*\.(?:jpg|gif|png)")]))
  }
  removePicture(index: number = 0) {
    this.formArrs.pictures.removeAt(index);
  }
  addTag() {
    this.formArrs.tags = this.form.get('tags') as FormArray;
    this.formArrs.tags.push(this.fb.control("", [Validators.required, Validators.pattern("[a-zA-Z]{3,10}")]))
  }
  removeTag(index: number = 0) {
    this.formArrs.tags.removeAt(index);
  }

  addIngredient() {
    this.formArrs.ingredients = this.form.get('ingredients') as FormArray;
    this.formArrs.ingredients.push(this.createIngredient());
  }
  removeIngredient(index: number = 0) {
    this.formArrs.ingredients.removeAt(index);
  }

  availableIngredients({ id }) {
    if (!this.formArrs.ingredients || this.ingredients===null) return [];
    const usedIds = this.formArrs.ingredients.value?.map(x => +x.id);
    return this.ingredients.filter(x => !usedIds.includes(x.id) || x.id === +id);
  }

  get validPicturesOnly() {
    if (!this.formArrs.pictures || this.formArrs.pictures.length === 0) return null;
    return this.formArrs.pictures.controls.filter(x => x.valid).map(x => x.value);
  }

  buildForm() {
    this.form = this.fb.group({
      name: ["", { validators: [Validators.required, Validators.minLength(4), takenValueValidator(this.takenRecipeNames), Validators.pattern("[a-zA-Z ]+")], updateOn: "blur" }],
      categoryId: ["-1", [Validators.min(1),Validators.required], []],
      description: ["", [Validators.required, Validators.minLength(100), Validators.maxLength(25600)], []],
      mainPicture: ["", [Validators.required, Validators.pattern("(http(s?):)([/|.|\\w|\\s|-])*\.(?:jpg|gif|png)")], []],
      videoLink: ["", [], []],
      difficulty: ["1", [Validators.required], []],
      pictures: this.fb.array([]),
      tags: this.fb.array([]),
      ingredients: this.fb.array([])
    },  // { updateOn: "blur" }
    )

    this.subscription$.push(this.getCtrl('name').valueChanges.subscribe(v => {
      if (this.getCtrl('name').invalid) { return; }
      if (!this.takenRecipeNames.includes(v) && this.takenRecipeNames.some(x => x.toLowerCase() === v.toLowerCase())) {
        this.takenRecipeNames.push(v);
        this.getCtrl('name').updateValueAndValidity();
        return;
      }
      this.subscription$.push(this.recipeService.nameTaken(v).subscribe((answ: boolean) => {
        if (answ) {
          this.takenRecipeNames.push(v);
          this.getCtrl('name').updateValueAndValidity();
        }
      }))
    }))
  }

  private createIngredient(): FormGroup {
    return this.fb.group({
      id: ["0", [Validators.min(1)], []],
      ammount: ["", [Validators.required, Validators.minLength(4), Validators.maxLength(16), Validators.pattern("[\\d\\.\\,\\/\\-]+\\s?\\w+")], []],
    })
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
    if (this.form.invalid) return;
    this.recipeService.submitRecipe(this.form.value).subscribe((id: string) => {
      this.toastr.success("Successfully published a new recipe", "Congratulations!")

      this.router.navigate(["/recipes/details", id]);
    }, (e) => {
      this.toastr.error("Something went wrong please try again");
    })
  }

  ngOnDestroy(): void {
    this.subscription$.filter(x => !x.closed).forEach(x => x.unsubscribe())
  }
}