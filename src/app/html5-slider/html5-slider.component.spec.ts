import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Html5SliderComponent } from './html5-slider.component';

describe('Html5SliderComponent', () => {
  let component: Html5SliderComponent;
  let fixture: ComponentFixture<Html5SliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Html5SliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Html5SliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
