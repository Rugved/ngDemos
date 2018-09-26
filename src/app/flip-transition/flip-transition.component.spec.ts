import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipTransitionComponent } from './flip-transition.component';

describe('FlipTransitionComponent', () => {
  let component: FlipTransitionComponent;
  let fixture: ComponentFixture<FlipTransitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlipTransitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipTransitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
