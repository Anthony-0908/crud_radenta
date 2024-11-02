import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from '../admin-layout/admin-layout.component';
// import { ProductComponent } from '../product/product.component';
import {ProductComponent} from '../pages/product/product.component'

import { FormComponent } from '../component/product/form/form.component';
const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'products',
        component: ProductComponent,
        children: [
          {
            path: 'create',
            component: FormComponent,
          }
        ]
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
