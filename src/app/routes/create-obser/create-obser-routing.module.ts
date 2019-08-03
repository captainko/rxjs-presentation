import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateObserComponent } from './create-obser.component';
import { ByOfComponent } from './by-of/by-of.component';
import { ByFromComponent } from './by-from/by-from.component';
import { ByFromEventComponent } from './by-from-event/by-from-event.component';


const routes: Routes = [
  { path: '', component: CreateObserComponent },
  { path: 'of', component: ByOfComponent },
  { path: 'from', component: ByFromComponent },
  { path: 'from-event', component: ByFromEventComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateObserRoutingModule { }
