import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MaterialModule } from '../../../../module/material/material.module';
import { Product } from '../../../../shared/core/model/product';
import { ProductService } from '../../../../service/product.service';

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

  constructor(private productService: ProductService) {}

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
}
