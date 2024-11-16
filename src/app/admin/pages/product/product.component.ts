
import { Component } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';

import { TableComponent } from '../../component/product/table/table.component';
import { FormComponent } from '../../component/product/form/form.component';
import { Product } from '../../../shared/core/model/product';
import { ProductService } from '../../../service/product.service';
import { MaterialModule } from '../../../module/material/material.module';
import { MatTableDataSource } from '@angular/material/table';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [TableComponent,FormComponent,MaterialModule,FormsModule,RouterOutlet,CommonModule,RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products: Product[] = [];
  dataSource = new MatTableDataSource<Product>();
  selectedProduct: Product | null = null; // For storing a single product
  // newProduct: Omit<Product, 'id'> = { Name: '', Description: '', Category: '' }; // Adjust properties based on your Product model
  showTable: boolean = true; // New property to control table visibility
  constructor(private productService: ProductService, private router: Router) {}


  loadProducts(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
      console.log('This is data', this.products);
      this.dataSource.data = this.products; // Set the data for the data source
    });
  }
  loadProductById(id: string): void {
    this.productService.getProductById(id).subscribe((data: Product) => {
      this.selectedProduct = data;
      console.log('Selected product', this.selectedProduct);
    });
  }


  editProduct(product: Product): void {
    // Logic for editing the product
    console.log('Edit product:', product);
    // Here, you might want to open a dialog or navigate to an edit page
  }

}
