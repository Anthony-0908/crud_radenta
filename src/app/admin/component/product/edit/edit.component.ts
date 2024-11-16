import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from '../../../../shared/core/model/product';
import { MaterialModule } from '../../../../module/material/material.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
  product: Product;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { product: Product },
    private dialogRef: MatDialogRef<EditComponent>
  ) {
    this.product = { ...data.product }; // Ensure product is initialized
    console.log('EditComponent initialized with product:', this.product);
  }

  saveChanges(): void {
    console.log('Saving product:', this.product);
    this.dialogRef.close(this.product); // Ensure that the updated product is passed back
  }

  closeModal(): void {
    this.dialogRef.close(); // Close the dialog without changes
  }
}
