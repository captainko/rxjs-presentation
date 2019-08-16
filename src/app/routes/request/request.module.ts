import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestRoutingModule } from './request-routing.module';
import { RequestComponent } from './request.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [RequestComponent],
  imports: [
    CommonModule,
    RequestRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class RequestModule { }
