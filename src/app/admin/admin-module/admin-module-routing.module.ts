import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from '../admin-layout/admin-layout.component';
import { ProductComponent } from '../pages/product/product.component';
import { TableComponent } from '../component/product/table/table.component';
import { FormComponent } from '../component/product/form/form.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'products',
        component: ProductComponent, // Wrapper component for table and form
        children: [
          {
            path: '',
            component: TableComponent // Default route shows table view
          },
          {
            path: 'create',
            component: FormComponent // Route for showing form
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
