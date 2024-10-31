import { ProductService } from './../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/core/model/product';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [], // Ensure this is included
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  selectedProduct: Product | null = null; // For storing a single product
  newProduct: Omit<Product, 'id'> = { Name: 'sss', Description: 'aaa', Category: 'fff' }; // Adjust properties based on your Product model

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();

    // this.createProduct();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
      console.log('This is data', this.products);
    });
  }

  loadProductById(id: string): void {
    this.productService.getProductById(id).subscribe((data: Product) => {
      this.selectedProduct = data;
      console.log('Selected product', this.selectedProduct);
    });
  }

  createProduct(): void {
    this.productService.createProduct(this.newProduct).subscribe(
      (createdProduct: Product) => {
        this.products.push(createdProduct);
        this.newProduct = { Name: 'sss', Description: 'aaa', Category: 'fff' }; // Reset after creation
        console.log('Created product', createdProduct);
      },
      (error) => {
        console.error('Error creating product:', error);
        alert('Failed to create product. Please check the console for details.');
      }
    );
  }
}
