import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'pattern', loadChildren: './routes/pattern/pattern.module#PatternModule' },
  { path: 'request', loadChildren: './routes/request/request.module#RequestModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
