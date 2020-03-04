import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientCartComponent } from './ingredient-cart.component';

describe('IngredientCartComponent', () => {
  let component: IngredientCartComponent;
  let fixture: ComponentFixture<IngredientCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
