import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { CommonComponent } from './common/common.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { ServiceComponent } from './service.component';
import { UserService } from 'src/app/services/user.service';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [CommonComponent, AsyncPipeComponent, ServiceComponent, SearchComponent],
  imports: [
    CommonModule,
    ServiceRoutingModule
  ],
  providers: [UserService]
})
export class ServiceModule { }
