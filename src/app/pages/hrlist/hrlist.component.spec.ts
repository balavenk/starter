import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrlistComponent } from './hrlist.component';

describe('HrlistComponent', () => {
  let component: HrlistComponent;
  let fixture: ComponentFixture<HrlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
