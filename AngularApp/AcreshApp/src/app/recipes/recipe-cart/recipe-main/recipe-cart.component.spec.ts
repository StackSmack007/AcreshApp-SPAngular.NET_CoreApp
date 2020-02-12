import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipeCartComponent } from './recipe-cart.component';

describe('RecipeCartComponent', () => {
  let component: RecipeCartComponent;
  let fixture: ComponentFixture<RecipeCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeCartComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});