import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonComponent } from './common/common.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { ServiceComponent } from './service.component';


const routes: Routes = [
  {
    path: '', component: ServiceComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: 'common'},
      { path: 'common', component: CommonComponent },
      { path: 'async-pipe', component: AsyncPipeComponent }
    ]
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
