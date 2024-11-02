import { Component, EventEmitter, Output } from '@angular/core';
import { MaterialModule } from '../../../../module/material/material.module';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [MaterialModule,FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Output() productCreated = new EventEmitter<{Name:string; Description:string; Category:string}>();


  newProduct =  {Name:'', Description:'', Category:''};

  onSubmit():void{
    this.productCreated.emit(this.newProduct)
    this.newProduct = {Name:'' , Description:'' , Category:'',};
  }
}
