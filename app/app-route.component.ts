import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MeComponent }   from './me.component';
import { RoutesComponent }      from './routes.component';

const routes: Routes = [
  { path: '', redirectTo: '/me', pathMatch: 'full' },
  { path: 'me',  component: MeComponent },
  { path: 'routes',     component: RoutesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}