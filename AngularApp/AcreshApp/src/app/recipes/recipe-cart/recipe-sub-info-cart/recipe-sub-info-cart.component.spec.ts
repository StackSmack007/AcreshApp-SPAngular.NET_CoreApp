import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeSubInfoCartComponent } from './recipe-sub-info-cart.component';

describe('RecipeSubInfoCartComponent', () => {
  let component: RecipeSubInfoCartComponent;
  let fixture: ComponentFixture<RecipeSubInfoCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeSubInfoCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeSubInfoCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
