import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouldronIngCartComponent } from './couldron-ing-cart.component';

describe('CouldronIngCartComponent', () => {
  let component: CouldronIngCartComponent;
  let fixture: ComponentFixture<CouldronIngCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouldronIngCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouldronIngCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
