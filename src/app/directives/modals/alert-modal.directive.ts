import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAlertModal]'
})
export class AlertModalDirective {
    element: ElementRef;

    constructor(private el: ElementRef) {

    el.nativeElement.style.color = 'red';
    this.element = el;
  }
  ngOnInit() {
    this.element.nativeElement.innerText = 'Content of the modal is red';
  }
}
