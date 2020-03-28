import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouldronRecCardComponent } from './couldron-rec-card.component';

describe('CouldronRecCardComponent', () => {
  let component: CouldronRecCardComponent;
  let fixture: ComponentFixture<CouldronRecCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouldronRecCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouldronRecCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
