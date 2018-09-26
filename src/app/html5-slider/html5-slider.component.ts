import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Options,ChangeContext, PointerType } from 'ng5-slider';
// import jQuery and Kendo UI and expose a '$' on the window object for convenience
import * as $ from 'jquery';
// window['$'] = window['jQuery'] = $;
import '@progress/kendo-ui';

declare var kendo: any;

@Component({
  selector: 'app-html5-slider',
  templateUrl: './html5-slider.component.html',
  styleUrls: ['./html5-slider.component.scss']
})
export class Html5SliderComponent implements AfterViewInit {

  @ViewChild('slider') sliderEl: ElementRef;

  sliderValue = 200;
  sliderOptions: Options = {
    ariaLabel: 'test ariaLabel',
    floor: 0,
    ceil: 500,
    step: 10,
    showTicks: true
  };

  // Kendo-angular-slider setup
  fixedTickWidth = 8;
  showButtons = true;
  value = 5;
  min = 1;
  max = 100;
  smallStep = 1;

  // ToDo: tried to add setOptions but could not get it
  // to work for the kendo ui for jQuery example.


  constructor() {

    if (window !== undefined) {
      (<any>window).$ = kendo.jQuery;
    }

  }

  onUserChangeEnd(changeContext: ChangeContext): void {
    console.log(`onUserChangeEnd(${this.getChangeContextString(changeContext)})\n`);
    $(".ng5-slider-pointer-min")[0].innerText = changeContext.value;    
    $(".ng5-slider-model-value").css('visibility', 'hidden');
    //$(".ng5-slider .ng5-slider-pointer")[0].toggleClass('changed');
  }


  onUserChangeStart(changeContext: ChangeContext): void {
    $(".ng5-slider-model-value").css('visibility', 'visible');
    $(".ng5-slider-model-value")[0].innerText = changeContext.value; 
  }  
  getChangeContextString(changeContext: ChangeContext): string {
    return `{pointerType: ${changeContext.pointerType === PointerType.Min ? 'Min' : 'Max'}, ` +
           `value: ${changeContext.value}, ` +
           `highValue: ${changeContext.highValue}}`;
  }

  ngAfterViewInit() {

    // Using a template reference variable
    kendo.jQuery(this.sliderEl.nativeElement).kendoSlider({

        change: (e) => {
          this.sliderEl.nativeElement.value = e.sender.value();
          
        }
    });
  }
}
