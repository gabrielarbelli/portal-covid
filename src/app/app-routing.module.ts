import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CovidComponent } from './covid/covid.component';


const routes: Routes = [
  { path: '', component: CovidComponent },
  { path: 'covid', component: CovidComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
