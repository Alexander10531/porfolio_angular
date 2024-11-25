import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageModule } from './modules/landing-page/landing-page.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule, 
    AppRoutingModule,
    LandingPageModule
  ]
})
export class AppModuleModule { }
