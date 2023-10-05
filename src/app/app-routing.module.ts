import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'login', 
    component: LoginComponent
  },
  {
    path: 'dashboard', 
    component: DashboardComponent,
    children: [
      {
        path: '', redirectTo: '/dashboard/citas/listar', pathMatch: 'full'
      },
      {
        path: 'citas', loadChildren: () => import('./citas/citas.module').then(m=>m.CitasModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
