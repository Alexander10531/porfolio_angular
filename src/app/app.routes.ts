import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes : Routes = [
	{
		path : "", 
        component : AppComponent,
        loadChildren : () => import("./modules/landing-page/landing-page.module").then(mod => mod.LandingPageModule)
    }
]; 
