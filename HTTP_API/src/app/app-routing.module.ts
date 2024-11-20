import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorDisplayComponent } from './color-display/color-display.component';

const routes: Routes = [
  { path: 'color/:hexCode', component: ColorDisplayComponent },
  { path: '', redirectTo: '/color/591BA6', pathMatch: 'full' }, // Default color
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}