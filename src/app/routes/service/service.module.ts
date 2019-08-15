import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { CommonComponent } from './common/common.component';
import { TakeUntilComponent } from './take-until/take-until.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';


@NgModule({
  declarations: [CommonComponent, TakeUntilComponent, AsyncPipeComponent],
  imports: [
    CommonModule,
    ServiceRoutingModule
  ]
})
export class ServiceModule { }
