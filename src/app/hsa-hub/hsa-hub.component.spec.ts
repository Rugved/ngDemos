import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsaHubComponent } from './hsa-hub.component';

describe('HsaHubComponent', () => {
  let component: HsaHubComponent;
  let fixture: ComponentFixture<HsaHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsaHubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsaHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
