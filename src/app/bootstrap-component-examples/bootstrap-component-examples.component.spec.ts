import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapComponentExamplesComponent } from './bootstrap-component-examples.component';

describe('BootstrapComponentExamplesComponent', () => {
  let component: BootstrapComponentExamplesComponent;
  let fixture: ComponentFixture<BootstrapComponentExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapComponentExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapComponentExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
