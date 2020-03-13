import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HelperService } from 'src/app/core/services/helper.service';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/core/services/category.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { takenNameValidatorAsync } from 'src/app/core/validators/takenNameValidatorAsync';
import { ICategoryCreate } from 'src/app/core/interfaces/categories/ICategoryCreate';

@Component({
  selector: 'acr-create-edit-form',
  templateUrl: './create-edit-form.component.html',
  styleUrls: ['./create-edit-form.component.css']
})
export class CreateEditFormComponent {

  @Output()
  btnClickEvent: EventEmitter<ICategoryCreate> = new EventEmitter<ICategoryCreate>();

  @Input()
  settings: { headline: string, submitBtnTitle: string, parentCategory: () => { pId: number, pName: string } };

  get btnDisabled() {
    return this.form.pristine || this.form.invalid || HelperService.compareObjects(this._ingredient, this.form.value);
  }

  private _ingredient: ICategoryCreate = null;

  @Input()
  set category(value: ICategoryCreate) {
    this._ingredient = value;
    this.namesAllowed.push(value.name);
    this.form.patchValue(value);
  }
  private namesAllowed: string[] = [];
  subscriptions: Subscription[] = [];

  form: FormGroup;
  constructor(private fb: FormBuilder, private catService: CategoryService, private authService: AuthService) {
    this.buildForm();
  }

  getCtrl(name: string) { return this.form.get(name); }

  getErr(name: string, errName: string) { return this.getCtrl(name).errors[errName] }

  /**Used to clasify input field as valid or not*/
  getValClasses(name: string): { 'is-invalid': boolean, 'is-valid': boolean } {
    const ctrl = this.getCtrl(name);
    return { 'is-invalid': (ctrl.invalid && ctrl.touched), 'is-valid': ctrl.valid }
  }

  invalidTouchedCtrl(name: string) { return this.getCtrl(name).invalid && this.getCtrl(name).touched }

  buildForm() {
    this.form = this.fb.group({
      name: ["", { validators: [Validators.required, takenNameValidatorAsync(this.catService.nameTaken.bind(this.catService), this.namesAllowed), Validators.minLength(4), Validators.maxLength(32), Validators.pattern('[a-zA-Z]+(\\s[a-zA-Z]{2,})?')], updateOn: "blur" }],
      description: ["", [Validators.required, Validators.minLength(32), Validators.maxLength(10240)]],
      authorId: this.authService.getUserInfo().id,
      parentCategoryId: null,
    })
  }

  submitForm() {
    if (this.form.valid) {
      this.form.get('parentCategoryId').setValue(this.settings.parentCategory().pId);
      this.btnClickEvent.emit(this.form.value)
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.filter(x => !x.closed).forEach(x => x.unsubscribe());
  }
}