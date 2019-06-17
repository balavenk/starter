import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EAManagementComponent } from './EAManagement.component';

describe('ProjectsComponent', () => {
  let component: EAManagementComponent;
  let fixture: ComponentFixture<EAManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EAManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EAManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
