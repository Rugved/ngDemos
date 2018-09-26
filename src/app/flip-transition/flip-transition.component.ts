import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-flip-transition',
  templateUrl: './flip-transition.component.html',
  styleUrls: ['./flip-transition.component.scss'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179.9deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('800ms ease-out')),
      transition('inactive => active', animate('800ms ease-in'))
    ])
  ]
})
export class FlipTransitionComponent {

  flip = 'inactive';

  toggleFlip() {
    this.flip = (this.flip === 'inactive') ? 'active' : 'inactive';
  }

  constructor() { }
}
