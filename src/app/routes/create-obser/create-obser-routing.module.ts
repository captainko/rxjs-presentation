import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateObserComponent } from './create-obser.component';


const routes: Routes = [
  { path: '', component: CreateObserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateObserRoutingModule { }
