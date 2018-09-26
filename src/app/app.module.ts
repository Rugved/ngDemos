import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng5SliderModule } from 'ng5-slider';

import { SiteHeaderComponent } from './site-header/site-header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BootstrapComponentExamplesComponent } from './bootstrap-component-examples/bootstrap-component-examples.component';
import { ClaimsActivityComponent } from './claims-activity/claims-activity.component';
import { HsaHubComponent } from './hsa-hub/hsa-hub.component';
import { CardCenterComponent } from './card-center/card-center.component';
import { AlertModalDirective } from './directives/modals/alert-modal.directive';
import { Html5SliderComponent } from './html5-slider/html5-slider.component';
import { FlipTransitionComponent } from './flip-transition/flip-transition.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SiteFooterComponent } from './site-footer/site-footer.component';
import {WwTextboxComponent} from './ww-textbox/ww-textbox.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SiteHeaderComponent,
    BootstrapComponentExamplesComponent,
    ClaimsActivityComponent,
    HsaHubComponent,
    CardCenterComponent,
    Html5SliderComponent,
    WwTextboxComponent,
    FlipTransitionComponent,
    SiteFooterComponent,
    PageNotFoundComponent,
    AlertModalDirective
  ],
  imports: [
    routing,
    BrowserModule,
    BrowserAnimationsModule,
    InputsModule,
    NgbModule,
    FormsModule,
    InputsModule,
    Ng5SliderModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
