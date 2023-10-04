import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AuthGuard } from './core/Guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full'
  },
  {
    path:'landing',
    component:LandingComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./Modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    canLoad:[AuthGuard],
    loadChildren: () => import('./Modules/home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
