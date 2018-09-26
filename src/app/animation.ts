import { trigger, state, style, transition,
    animate, group, query, stagger, keyframes
} from '@angular/animations';

export const SlideUpDown = [
    trigger('slideUpDown', [
        transition('void => *', [
          style({height: 0, margin: 0, padding: 0}),
          animate(500, style({height: '*', margin: '*', padding: '*'}))
        ]),
        transition('* => void', [
          style({height: '*', margin: '*', padding: '*'}),
          animate(500, style({height: 0, margin: 0, padding: 0}))
        ])
      ])    
]

export const DivInOut = [
    trigger('divInOut', [
        transition('void => *', [
            style({transform: 'translateY(-100%)'}),
            animate(800)
        ]),
        transition('* => void', [
            animate(800, style({transform: 'translateY(-100%)'}))
        ])
      ])    
]

export const SlideInOutAnimation = [
    trigger('slideInOut', [
        state('in', style({
            'max-height': '500px', 'opacity': '1', 'visibility': 'visible'
        })),
        state('out', style({
            'max-height': '0px', 'opacity': '1', 'visibility': 'visible'
        })),
        transition('in => out', [group([
            animate('400ms ease-in-out', style({
                'opacity': '1'
            })),
            animate('600ms ease-in-out', style({
                'max-height': '0px'
            })),
            animate('700ms ease-in-out', style({
                'visibility': 'hidden'
            }))
        ]
        )]),
        transition('out => in', [group([
            animate('1ms ease-in-out', style({
                'visibility': 'visible'
            })),
            animate('600ms ease-in-out', style({
                'max-height': '500px'
            })),
            animate('800ms ease-in-out', style({
                'opacity': '1'
            }))
        ]
        )])
    ]),
]

export const SlideOutInAnimation = [
    trigger('slideOutIn', [
        state('in', style({
            'max-height': '500px', 'opacity': '1', 'visibility': 'visible'
        })),
        state('out', style({
            'max-height': '0px', 'opacity': '0', 'visibility': 'hidden'
        })),
        transition('in => out', [group([
            animate('400ms ease-in-out', style({
                'opacity': '0'
            })),
            animate('600ms ease-in-out', style({
                'max-height': '0px'
            })),
            animate('700ms ease-in-out', style({
                'visibility': 'hidden'
            }))
        ]
        )]),
        transition('out => in', [group([
            animate('1000ms ease-in-out', style({
                'visibility': 'visible'
            })),
            animate('1000ms ease-in-out', style({
                'max-height': '500px'
            })),
            animate('800ms ease-in-out', style({
                'opacity': '1'
            }))
        ]
        )])
    ]),
]