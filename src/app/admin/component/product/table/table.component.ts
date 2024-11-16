import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { Product } from '../../../../shared/core/model/product';
import { ProductService } from '../../../../service/product.service';
import { EditComponent } from '../edit/edit.component'; // Edit component modal
import { MatDialogRef } from '@angular/material/dialog'; // Correct dialog reference
import { MaterialModule } from '../../../../module/material/material.module';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  products: Product[] = []; // Initialize products array
  dataSource = new MatTableDataSource<Product>(); // Initialize data source
  displayedColumns: string[] = ['Name', 'Description', 'Category', 'Actions']; // Specify columns

  @ViewChild(MatSort) sort!: MatSort; // Reference for sorting
  @ViewChild(MatPaginator) paginator!: MatPaginator; // Reference for pagination

  constructor(
    private productService: ProductService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadProducts(); // Load products when component initializes
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data; // Assign fetched data to products
      console.log('This is data table', this.products);
      this.dataSource.data = this.products; // Set the data for the data source
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort; // Set the sorting
    this.dataSource.paginator = this.paginator; // Set the paginator
  }

  openModal(product: Product | null): void {
    const dialogRef = this.dialog.open(EditComponent, {
      width: '400px',
      panelClass: 'tailwind-modal',
      data: { product } // Pass the product to the modal as input
    });

    dialogRef.afterClosed().subscribe((updatedProduct: Product) => {
      if (updatedProduct && updatedProduct.id) {
        console.log('Updated Product:', updatedProduct); // Log the updated product to ensure it's correct
        this.updateProduct(updatedProduct); // Call updateProduct with updated product
      } else {
        console.warn('No valid product received from modal or invalid id.');
      }
    });
  }

  editProduct(product: Product): void {
    this.openModal(product); // Open modal with the selected product
  }

  updateProduct(updatedProduct: Product): void {
    if (!updatedProduct || !updatedProduct.id) {
      console.error('Invalid product data');
      return;
    }

    this.productService.updateProduct(updatedProduct).subscribe((response) => {
      const index = this.products.findIndex(p => p.id === response.id);
      if (index !== -1) {
        this.products[index] = response;
        this.dataSource.data = [...this.products];
      }
    }, (error) => {
      console.error('Error updating product:', error);
      alert('Failed to update product.');
    });
  }

  deleteProduct(id: string): void {
    console.log(`Attempting to delete product with ID: ${id}`);
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.products = this.products.filter(product => product.id !== id);
        this.dataSource.data = this.products;
        console.log(`Product with ID ${id} deleted successfully.`);
      }, (error) => {
        console.error(`Error deleting product with ID ${id}:`, error);
        alert('Failed to delete product.');
      });
    }
  }
}
