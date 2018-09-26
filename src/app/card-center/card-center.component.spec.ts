import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCenterComponent } from './card-center.component';

describe('CardCenterComponent', () => {
  let component: CardCenterComponent;
  let fixture: ComponentFixture<CardCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
