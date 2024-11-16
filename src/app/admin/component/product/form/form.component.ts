import { Product } from './../../../../shared/core/model/product';
import { Component, EventEmitter, Output } from '@angular/core';
import { MaterialModule } from '../../../../module/material/material.module';
import { ProductService } from '../../../../service/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private productService: ProductService) {}

  products: Product[] = [];

  @Output() productCreated = new EventEmitter<Product>();


  newProduct: Product = { ProductName: '', ProductDescription: '', ProductCategory: '' };

  createproduct(): void {
    this.productService.createProduct(this.newProduct).subscribe(
      (createdProduct: Product) => {
        console.log('Created product:', createdProduct);
        this.newProduct = { ProductName: '', ProductDescription: '', ProductCategory: '' }; // Reset form fields
        this.productCreated.emit(createdProduct); // Emit the created product

        console.log('product created');
      },
      (error) => {
        console.error('Error creating product:', error);
        alert('Failed to create product. Please check the console for details.');
      }
    );
  }

  onSubmit(): void {

    this.createproduct();
  }
}
