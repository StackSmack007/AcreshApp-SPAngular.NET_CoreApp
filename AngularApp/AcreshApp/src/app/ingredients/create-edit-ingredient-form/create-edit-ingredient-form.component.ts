import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { OriginTypes } from 'src/app/core/enumerations/OriginTypes';
import { HelperService } from 'src/app/core/services/helper.service';
import { MeasureTypes } from 'src/app/core/enumerations/MeasureTypes';
import { trigger, transition, style, animate } from '@angular/animations';
import { IngredientService } from 'src/app/core/services/ingredient.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { IIngredientCreate } from 'src/app/core/interfaces/ingredients/IIngredientCreate';
import { takenNameValidatorAsync } from 'src/app/core/validators/takenNameValidatorAsync';

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
export class CreateEditIngredientFormComponent implements OnDestroy {

  @Output()
  btnClickEvent: EventEmitter<IIngredientCreate> = new EventEmitter<IIngredientCreate>();

  get btnDisabled() {
    return this.form.pristine || this.form.invalid || HelperService.compareObjects(this._ingredient, this.form.value);
  }

  @Input()
  settings: { headline: string, submitBtnTitle: string };

  private _ingredient: IIngredientCreate = null;

  @Input()
  set ingredient(value: IIngredientCreate) {
    this._ingredient = value;
    this.namesAllowed.push(value.name);
    this.form.patchValue(value);
  }
  private namesAllowed: string[] = [];
  subscriptions: Subscription[] = [];

  form: FormGroup;
  constructor(private fb: FormBuilder, private ingService: IngredientService, private authService: AuthService) {
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
    return { 'is-invalid': (ctrl.invalid && ctrl.touched), 'is-valid': ctrl.valid }
  }

  invalidTouchedCtrl(name: string) {
    return this.getCtrl(name).invalid && this.getCtrl(name).touched;
  }

  measureTypes = HelperService.getEnumOptions(MeasureTypes);
  originTypes = HelperService.getEnumOptions(OriginTypes)
                             .sort((a, b) =>a[0].length-b[0].length);

  picUrl = null;
  buildForm() {
    this.form = this.fb.group({
      authorId: this.authService.getUserInfo().id,
      name: ["", { validators: [Validators.required, takenNameValidatorAsync(this.ingService.nameTaken.bind(this.ingService), this.namesAllowed), Validators.minLength(4), Validators.maxLength(32), Validators.pattern('[a-zA-Z]+(\\s[a-zA-Z]{2,})?')], updateOn: "blur" }],
      isEssential: [false, [Validators.required]],
      measureType: [1, [Validators.required]],
      origin: [1, [Validators.required]],
      picUrl: ["", [Validators.required]],
      description: ["", [Validators.required, Validators.minLength(32), Validators.maxLength(10240)]],
    })

    const pic = this.form.get('picUrl');
    pic.valueChanges.subscribe(v => {
      if (pic.invalid) return;
      this.picUrl = null;
      setTimeout(() => this.picUrl = v, 2000)
    })
  }

  submitForm() {
    if (this.form.valid) { this.btnClickEvent.emit(this.form.value) }
  }

  ngOnDestroy(): void {
    this.subscriptions.filter(x => !x.closed).forEach(x => x.unsubscribe());
  }
}