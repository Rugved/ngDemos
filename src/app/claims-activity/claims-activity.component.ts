import { Component, OnInit } from '@angular/core';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-claims-activity',
  templateUrl: './claims-activity.component.html',
  styleUrls: ['./claims-activity.component.scss']
})
export class ClaimsActivityComponent implements OnInit {
  public valueHorizontal: number = 5;
  public valueVertical: number = 5;
  public min: number = 0;
  public max: number = 15;
  public smallStep: number = 1;
  constructor() { }

  ngOnInit() {

  }

}
