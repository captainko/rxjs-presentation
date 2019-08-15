import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateObserRoutingModule } from './create-obser-routing.module';
import { CreateObserComponent } from './create-obser.component';



@NgModule({
  declarations: [CreateObserComponent],
  imports: [
    CommonModule,
    CreateObserRoutingModule
  ]
})
export class CreateObserModule { }
