import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WwTextboxComponent } from './ww-textbox.component';

describe('WwTextboxComponent', () => {
  let component: WwTextboxComponent;
  let fixture: ComponentFixture<WwTextboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WwTextboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WwTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
