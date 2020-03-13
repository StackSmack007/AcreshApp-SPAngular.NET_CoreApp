import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllComponent } from './main-board-categories.component';

describe('ListAllComponent', () => {
  let component: ListAllComponent;
  let fixture: ComponentFixture<ListAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
