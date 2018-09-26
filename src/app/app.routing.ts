import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ClaimsActivityComponent } from './claims-activity/claims-activity.component';
import { HsaHubComponent } from './hsa-hub/hsa-hub.component';
import { CardCenterComponent } from './card-center/card-center.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BootstrapComponentExamplesComponent } from './bootstrap-component-examples/bootstrap-component-examples.component';
import { Html5SliderComponent } from './html5-slider/html5-slider.component';
import { FlipTransitionComponent } from './flip-transition/flip-transition.component';
import { WwTextboxComponent } from './ww-textbox/ww-textbox.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'claims-activity', component: ClaimsActivityComponent },
  { path: 'hsa-hub', component: HsaHubComponent },
  { path: 'card-center', component: CardCenterComponent },
  { path: 'bootstrap-component-examples', component: BootstrapComponentExamplesComponent},
  { path: 'html5-slider', component: Html5SliderComponent},
  { path: 'flip-transition', component: FlipTransitionComponent},
  { path: 'ww-textbox', component: WwTextboxComponent},
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

export const routing = RouterModule.forRoot(appRoutes);
