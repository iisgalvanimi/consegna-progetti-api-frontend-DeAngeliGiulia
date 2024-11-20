import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorDisplayComponent } from './color-display/color-display.component';


const routes: Routes = [
    { path: 'colors', component: ColorDisplayComponent },
    { path: 'colors/:set', component: ColorDisplayComponent },
    { path: 'colors/:name', component: ColorDisplayComponent },
    { path: '', redirectTo: '/colors', pathMatch: 'full' }
  ];

@NgModule({
 
})
export class AppRoutingModule {}
