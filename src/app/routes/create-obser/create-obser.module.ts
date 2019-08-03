import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateObserRoutingModule } from './create-obser-routing.module';
import { CreateObserComponent } from './create-obser.component';
import { ByOfComponent } from './by-of/by-of.component';
import { ByFromComponent } from './by-from/by-from.component';
import { ByFromEventComponent } from './by-from-event/by-from-event.component';


@NgModule({
  declarations: [CreateObserComponent, ByOfComponent, ByFromComponent, ByFromEventComponent],
  imports: [
    CommonModule,
    CreateObserRoutingModule
  ]
})
export class CreateObserModule { }
