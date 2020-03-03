import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIngredientComponent } from './create-ingredient.component';

describe('CreateIngredientComponent', () => {
  let component: CreateIngredientComponent;
  let fixture: ComponentFixture<CreateIngredientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateIngredientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
