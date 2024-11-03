import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { AdminLayoutComponent } from '../admin-layout/admin-layout.component';
import { ProductService } from '../../service/product.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    AdminModuleRoutingModule,
    FormsModule,

  ],

  providers:[
    ProductService
  ]
})
export class AdminModuleModule { }
