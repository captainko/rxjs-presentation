import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { CommonComponent } from './common/common.component';
import { TakeUntilComponent } from './take-until/take-until.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { ServiceComponent } from './service.component';


@NgModule({
  declarations: [CommonComponent, TakeUntilComponent, AsyncPipeComponent, ServiceComponent],
  imports: [
    CommonModule,
    ServiceRoutingModule
  ]
})
export class ServiceModule { }
