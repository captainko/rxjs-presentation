import { NgModule } from "@angular/core";
import { PatternComponent } from './pattern.component';
import { PatternRoutingModule } from './pattern-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PatternComponent],
  imports: [CommonModule, PatternRoutingModule],
  exports: [PatternComponent],
})
export class PatternModule {}
