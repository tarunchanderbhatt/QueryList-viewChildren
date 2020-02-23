import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentchangecolorComponent } from './parentchangecolor.component';

describe('ParentchangecolorComponent', () => {
  let component: ParentchangecolorComponent;
  let fixture: ComponentFixture<ParentchangecolorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentchangecolorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentchangecolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
