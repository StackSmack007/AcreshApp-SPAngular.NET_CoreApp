import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CauldronComponent } from './cauldron.component';

describe('CouldronComponent', () => {
  let component: CauldronComponent;
  let fixture: ComponentFixture<CauldronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CauldronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CauldronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
