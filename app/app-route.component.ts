import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MeComponent }   from './me.component';
import { RoutesComponent }      from './routes.component';
import { SetupComponent }      from './setup.component';

const routes: Routes = [
  { path: '', redirectTo: '/me', pathMatch: 'full' },
  { path: 'me',  component: MeComponent },
  { path: 'routes',     component: RoutesComponent },
  { path: 'setup',     component: SetupComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}