import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { ProductComponent } from './admin/product/product.component';


export const routes: Routes = [
  {
    path: 'admin',
    loadChildren:() => import('./admin//admin-module/admin-module.module').then(m => m.AdminModuleModule)
  },
];
