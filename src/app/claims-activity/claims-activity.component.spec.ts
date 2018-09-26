import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsActivityComponent } from './claims-activity.component';

describe('ClaimsActivityComponent', () => {
  let component: ClaimsActivityComponent;
  let fixture: ComponentFixture<ClaimsActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimsActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimsActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
