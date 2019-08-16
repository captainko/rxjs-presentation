import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { CommonComponent } from './common/common.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { ServiceComponent } from './service.component';
import { UserService } from 'src/app/services/user.service';


@NgModule({
  declarations: [CommonComponent, AsyncPipeComponent, ServiceComponent],
  imports: [
    CommonModule,
    ServiceRoutingModule
  ],
  providers: [UserService]
})
export class ServiceModule { }
