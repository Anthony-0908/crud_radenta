import { Component, Input, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MaterialModule } from '../../../../module/material/material.module';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewInit {
  @Input() dataSource = new MatTableDataSource<any>(); // Accept data source from parent
  @Input() displayedColumns: string[] = ['Name', 'Description', 'Category']; // Column names

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    // Remove the dummy data initialization here
    console.log('Initial Table data source:', this.dataSource.data);
  }

  ngAfterViewInit(): void {
    // Set up sorting and pagination after the view has initialized
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
