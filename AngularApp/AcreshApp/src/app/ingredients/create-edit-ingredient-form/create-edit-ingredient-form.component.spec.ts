import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditIngredientFormComponent } from './create-edit-ingredient-form.component';

describe('CreateEditIngredientFormComponent', () => {
  let component: CreateEditIngredientFormComponent;
  let fixture: ComponentFixture<CreateEditIngredientFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEditIngredientFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditIngredientFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
