import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { QuotaallocationComponent } from './quotaallocation.component';

describe('QuotaallocationComponent', () => {
  let component: QuotaallocationComponent;
  let fixture: ComponentFixture<QuotaallocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotaallocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotaallocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
