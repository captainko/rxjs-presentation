import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestRoutingModule } from './request-routing.module';
import { RequestComponent } from './request.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [RequestComponent],
  imports: [
    CommonModule,
    RequestRoutingModule,
    HttpClientModule,
  ]
})
export class RequestModule { }
