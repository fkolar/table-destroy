import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {ItemsPageComponent} from "./items-page/items-page.component";
import {MultiInputComponent} from "./multi-input/multi-input.component";
import {CdkScrollComponent} from "./cdk-scroll/cdk-scroll.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: LandingPageComponent},
  {path: 'items', component: ItemsPageComponent},
  {path: 'multi', component: MultiInputComponent},
  {path: 'scroll', component: CdkScrollComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
