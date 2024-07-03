import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetwebsiteRoutingModule } from './petwebsite-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';


@NgModule({
	declarations: [
		HeaderComponent, 
		LandingPageComponent
	],
  	imports: [
		CommonModule],
	exports : [
		PetwebsiteRoutingModule,
	]
})
export class PetwebsiteModule { }
