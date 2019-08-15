import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonComponent } from './common/common.component';
import { TakeUntilComponent } from './take-until/take-until.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';


const routes: Routes = [
  {path: '',  component: CommonComponent },
  {path: 'take-until', component: TakeUntilComponent},
  {path: 'async-pipe', component: AsyncPipeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
