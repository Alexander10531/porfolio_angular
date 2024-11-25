import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes : Routes = [
	{
		path : "", 
        component : AppComponent,
        //loadChildren : () => import("./modules/petwebsite/petwebsite.module").then(mod => mod.PetwebsiteModule)
    }
]; 
