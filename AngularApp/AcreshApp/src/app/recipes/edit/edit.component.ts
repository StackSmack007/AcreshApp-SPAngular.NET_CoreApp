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
import { Router, ActivatedRoute } from '@angular/router';
import { IRecipeCreate } from 'src/app/core/interfaces/IRecipeCreate';
import { SignalRRecipeDetailsService } from 'src/app/core/services/signal-r.recipe-details.service';
import { filter, tap, first } from 'rxjs/operators';

@Component({
  selector: 'acr-edit-rec',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
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
export class EditRecipeComponent implements OnDestroy, DoCheck {
  private originalName: string;
  private takenRecipeNames: string[] = ["taken"];
  private ingredients: IIngredientMini[] = null// [{ id: 1, name: "salati" }, { id: 2, name: "torshii" }];
  form: FormGroup
  categorie$: Observable<ICategoryMini[]> = null; //[{ name: "no category", id: -1 }, { name: "cat1111111111111111", id: 1 }, { name: "cat2", id: 2 }, { name: "cat3", id: 3 }]
  subscription$: Subscription[] = [];

  get btnDisabled() {
    return this.form.pristine || this.form.invalid;
  }

  diffGrades = Object.entries(RecipeDifficulty).filter((_, index, arr) => index < arr.length / 2);
  constructor(private singalRService: SignalRRecipeDetailsService, route: ActivatedRoute, private fb: FormBuilder, private authService: AuthService, private recipeService: RecipeService, catService: CategoryService, ingredientService: IngredientService, private toastr: ToastrService, private router: Router) {
    this.categorie$ = catService.getAllMini();
    this.subscription$.push(ingredientService.getAllMini().subscribe(x => {
      this.ingredients = x;
    }))
    this.buildForm();
    this.loadData(route.snapshot.data.data as IRecipeCreate, route.snapshot.params["id"])
    this.singalRService.startConnection({ id: route.snapshot.params["id"] });
  }

  private loadData(data: IRecipeCreate, id: string) {
    data.ingredients.forEach(x => this.addIngredient(x));
    data.pictures.forEach(x => this.addPicture(x));
    data.tags.forEach(x => this.addTag(x));
    this.originalName = data.name;
    this.form.patchValue(data);
    this.getCtrl("id").setValue(id);
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
      id: [id, [Validators.min(1)], []],
      ammount: [ammount, [Validators.required, Validators.minLength(4), Validators.maxLength(16), Validators.pattern("[\\d\\.\\,\\/\\-]+\\s?\\w+")], []],
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
      name: ["", { validators: [Validators.required, Validators.minLength(4), takenValueValidator(this.takenRecipeNames), Validators.pattern("[a-zA-Z ]+")], updateOn: "blur" }],
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
    this.subscription$.push(this.getCtrl('name').valueChanges.subscribe(v => {
      if (this.getCtrl('name').invalid || v.toLowerCase() === this.originalName.toLowerCase()) { return; }
      if (!this.takenRecipeNames.includes(v) && this.takenRecipeNames.some(x => x.toLowerCase() === v.toLowerCase())) {
        this.takenRecipeNames.push(v);
        return this.getCtrl('name').updateValueAndValidity();
      }
      this.subscription$.push(this.recipeService.nameTaken(v).subscribe((answ: boolean) => {
        if (answ) {
          this.takenRecipeNames.push(v);
          return this.getCtrl('name').updateValueAndValidity();
        }
      }))
    }))
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
    const { value } = this.form;
    this.recipeService.editRecipe(value).subscribe((r: string) => {
      this.toastr.success("Successfully edited a recipe", "Congratulations!")
      this.router.navigate(["/recipes/details", r]);

      let patchValueForSignalR = {
        name: value.name,
        description: value.description,
        pictures: value.pictures,
        difficulty: +value.difficulty,
        videoLink: value.videoLink,
        tags: value.tags.join(", "),
      }

      this.categorie$.subscribe(v => {
        patchValueForSignalR["categoryName"] = v.find(x => x.id === +value.categoryId).name
        this.singalRService.patchRecipeData(patchValueForSignalR)
      })
    }, (e) => {
      this.toastr.error("Something went wrong please try again");
    })
  }

  ngOnDestroy(): void {
    this.subscription$.filter(x => !x.closed).forEach(x => x.unsubscribe());
    this.singalRService.stopConnection();
  }
}