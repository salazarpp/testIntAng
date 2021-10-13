import { AuthGuard } from './auth.guard';
import { UserLoginComponent } from './user-login/user-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: UserLoginComponent,
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
