import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { takenValueValidator } from 'src/app/core/validators/takenName';
import { Subscription } from 'rxjs';
import { IngredientService } from 'src/app/core/services/ingredient.service';
import { MeasureTypes } from 'src/app/core/enumerations/MeasureTypes';
import { OriginTypes } from 'src/app/core/enumerations/OriginTypes';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'acr-create-edit-ingredient-form',
  templateUrl: './create-edit-ingredient-form.component.html',
  styleUrls: ['./create-edit-ingredient-form.component.css'],
  animations: [
    trigger('showHide', [
      transition('void=>*', [style({ opacity: '0', transform: 'scaleY(0.1)' }), animate(2000)]),
      transition('*=>void', [animate(2000), style({ opacity: '0', transform: 'scaleY(0.1)' })]),
    ])
  ]
})
export class CreateEditIngredientFormComponent implements OnInit {

  private _ingredient = null;

  @Input()
  settings: { headline: string, submitBtnTitle: string };

  @Input()
  set recipe(value) {
    this._ingredient = value;
    this.form.patchValue(value);
  }

  subscriptions: Subscription[] = [];

  takenNames: string[] = ["taken"];

  form: FormGroup;
  constructor(private fb: FormBuilder, private ingService: IngredientService) {
    this.buildForm();
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

  measureTypes = Object.entries(MeasureTypes).filter((_, index, arr) => index < arr.length / 2);
  originTypes = Object.entries(OriginTypes).filter((_, index, arr) => index < arr.length / 2);

  picUrl = null;

  ngOnInit(): void {
  }

  buildForm() {
    this.form = this.fb.group({
      name: ["", { validators: [Validators.required, takenValueValidator(this.takenNames), Validators.minLength(4), Validators.pattern('[a-zA-Z]+(\\s[a-zA-Z]{2,})?')], updateOn: "blur" }],
      isVegan: [false, [Validators.required]],
      measureType: ["1", [Validators.required]],
      origin: ["1", [Validators.required]],
      picUrl: ["", [Validators.required]],
      description: ["", [Validators.required, Validators.minLength(30), Validators.maxLength(10240)]],
    })
    const pic = this.form.get('picUrl');
    pic.valueChanges.subscribe(v => {
     console.log("proba");
      if (pic.invalid) return;
      console.log("deistvam");
      this.picUrl = null;
      // this.picUrl=v;
      setTimeout(()=>{this.picUrl = v;
      console.log("da")},2000)      
    })


    this.subscriptions.push(this.getCtrl('name').valueChanges.subscribe(v => {
      if (this.getCtrl('name').invalid || (this._ingredient && v.toLowerCase() === this._ingredient.name.toLowerCase())) { return; }
      if (!this.takenNames.includes(v) && this.takenNames.some(x => x.toLowerCase() === v.toLowerCase())) {
        this.takenNames.push(v);
        return this.getCtrl('name').updateValueAndValidity();
      }
      return this.getCtrl('name').updateValueAndValidity();//ToDo Remove after implementing api name check!
      this.subscriptions.push(this.ingService.nameTaken(v).subscribe((answ: boolean) => {
        if (answ) {
          this.takenNames.push(v);
          return this.getCtrl('name').updateValueAndValidity();
        }
      }))
    }))

  }
}
