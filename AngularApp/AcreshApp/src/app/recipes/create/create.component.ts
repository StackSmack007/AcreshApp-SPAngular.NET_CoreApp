import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { takenValueValidator } from 'src/app/core/validators/takenName';
import { RecipeService } from 'src/app/core/services/recipe.service';
import { HelperService } from 'src/app/core/services/helper.service';

@Component({
  selector: 'acr-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  private takenRecipeNames: string[] = ["taken1"];
  form: FormGroup
  categories = [{ name: "no category", id: -1 },{ name: "cat1111111111111111", id: 1 }, { name: "cat2", id: 2 }, { name: "cat3", id: 3 }]
  diffGrades = ["Easy", "Normal", "Hard"];
  ingredients = [{id:1,name:"salati"},{id:2,name:"torshii"}];
  constructor(private fb: FormBuilder, private authService: AuthService, private recipeService: RecipeService) {
    this.buildForm();
  }

  get videoLink(){
    if(this.getCtrl('videoUrl').invalid || this.form.value['videoUrl'].length===0){return null}
    const id = this.form.value['videoUrl'].substr(this.form.value['videoUrl'].indexOf("v=") + 2 || this.form.value['videoUrl'].lastIndexOf("\\") + 1);
    return HelperService.videoLinkMake(id);
  }

  get myPersonality() {
    const { userName, cookRank } = this.authService.getUserInfo();
    let user=this.authService.getUserInfo();
    return { userName, cookRank };
  }

  logForm() {
    console.log(this.form, this.form.controls.pictures['controls'].map(x => x.value));
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
    return { 'is-invalid': (ctrl.invalid&&ctrl.touched), 'is-valid': ctrl.valid }
  }
//Used to clasify input field as valid or not
  getCtrlValClasses(ctr: FormControl): { 'is-invalid': boolean, 'is-valid': boolean } {
    return { 'is-invalid': (ctr.invalid&&ctr.touched), 'is-valid': ctr.valid }
  }

  invalidTouchedCtrl(name: string) {
    return this.getCtrl(name).invalid && this.getCtrl(name).touched;
  }

  public formArrs: { pictures: FormArray, ingridients: FormArray } = { pictures: undefined, ingridients: undefined };

  addPicture() {
    this.formArrs.pictures = this.form.get('pictures') as FormArray;
    this.formArrs.pictures.push(this.fb.control("", [Validators.required,Validators.pattern("(http(s?):)([/|.|\\w|\\s|-])*\.(?:jpg|gif|png)")]))
  }
  removePicture(index: number = 0) {
    this.formArrs.pictures.removeAt(index);
  }

  addIngredient() {
    this.formArrs.ingridients = this.form.get('ingridients') as FormArray;
    this.formArrs.ingridients.push(this.createIngredient());
  }

  removeIngredient(index: number = 0) {
    this.formArrs.ingridients.removeAt(index);
  }

  buildForm() {
    this.form = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(4), takenValueValidator(this.takenRecipeNames),Validators.pattern("[a-zA-Z ]+")], []],
      category: ["-1", [], []],
      description: ["", [Validators.required,Validators.minLength(100),Validators.maxLength(25600)], []],
      mainPic: ["", [Validators.required,Validators.pattern("(http(s?):)([/|.|\\w|\\s|-])*\.(?:jpg|gif|png)")], []],
      videoUrl: ["", [], []],
      difficulty: ["1", [Validators.required], []],
      pictures: this.fb.array([]),
      ingridients: this.fb.array([])
    })

    this.getCtrl('name').valueChanges.subscribe(v => {
      if (this.invalidTouchedCtrl('name')) {
        this.recipeService.nameTaken(v).subscribe((answ: boolean) => {
          if (!answ) return;
          this.takenRecipeNames.push(v);
          this.getCtrl('name').updateValueAndValidity();
        })
      }
    });
  }

  private createIngredient(): FormGroup {
    return this.fb.group({
      id: ["0", [Validators.min(1)], []],
      ammount: ["", [Validators.required, Validators.minLength(4), Validators.maxLength(16), Validators.pattern("[\\d\\.\\,\\/\\-]+\\s?\\w+")], []],
    })
  }

submitRecipe(){
  console.log(this.form.value)
}


  ngOnInit(): void { }
}