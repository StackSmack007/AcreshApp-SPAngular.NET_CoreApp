import { Subscription, Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HelperService } from 'src/app/core/services/helper.service';
import { CategoryService } from 'src/app/core/services/category.service';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ICategoryCreate } from 'src/app/core/interfaces/categories/ICategoryCreate';
import { ICategoryOption } from 'src/app/core/interfaces/categories/ICategoryOption';
import { takenNameValidatorAsync } from 'src/app/core/validators/takenNameValidatorAsync';

@Component({
  selector: 'acr-create-edit-form',
  templateUrl: './create-edit-form.component.html',
  styleUrls: ['./create-edit-form.component.css']
})
export class CreateEditFormComponent {

  @Output()
  btnClickEvent: EventEmitter<ICategoryCreate> = new EventEmitter<ICategoryCreate>();
  get btnDisabled() {
    return this.form.pristine || this.form.invalid || HelperService.compareObjects(this._category, this.form.value);
  }
  
  @Output()
  abortEvent:EventEmitter<any>=new EventEmitter();
  abort(){    this.abortEvent.emit();  }

  private _settings: { headline: string, submitBtnTitle: string, parentCategoryId: number }
  get settings() { return this._settings }

  @Input()
  set settings(v) {
    this._settings = v;
    this.form.get("parentCategoryId").setValue(v.parentCategoryId)
  };

  @Input()
  navigateTreeEvent: EventEmitter<number>;

  private _category: ICategoryCreate = null;

  @Input()
  set category(value: ICategoryCreate) {
    if (value === null) return;
    this._category = value;
    this.namesAllowed.push(value.name);
    this.form.patchValue(value);
  }
  private namesAllowed: string[] = [];
  subscriptions: Subscription[] = [];

  form: FormGroup;
  constructor(private fb: FormBuilder, private catService: CategoryService, private authService: AuthService) {
    this.categorie$ = catService.getAllMini();
    this.buildForm();
  }

  categorie$: Observable<ICategoryOption[]>

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

    this.subscriptions.push(
      this.form.get("parentCategoryId")
        .valueChanges.subscribe(id => {
          this.navigateTreeEvent.emit(id === "null" || id === null ? null : +id)
        }))
  }

  submitForm() {
    if (this.form.valid) {
      this.btnClickEvent.emit(this.form.value)
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.filter(x => !x.closed).forEach(x => x.unsubscribe());
  }
}