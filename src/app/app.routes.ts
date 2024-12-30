import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';

export const routes: Routes = [
  {
    path: 'admin',
    loadChildren:() => import('./admin/admin-module/admin-module.module').then(m => m.AdminModuleModule)
  },
  {
    path:'',
    component:LoginComponent

  },
  {
    path:'reset-password',
    component:ResetPasswordComponent
  },
];
