import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'pattern', loadChildren: './routes/pattern/pattern.module#PatternModule' },
  { path: 'request', loadChildren: './routes/request/request.module#RequestModule' },
  { path: 'create-obser', loadChildren: './routes/create-obser/create-obser.module#CreateObserModule' },
  { path: 'service', loadChildren: './routes/service/service.module#ServiceModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
