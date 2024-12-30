import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import FormBuilder and FormGroup
import { MaterialModule } from '../module/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup; // Define a FormGroup

  constructor(private fb: FormBuilder) { } // Inject FormBuilder

  ngOnInit() {
    this.loginForm = this.fb.group({ // Use FormBuilder to create the form
      email: ['', [Validators.required, Validators.email]], // Define controls and validators
      password: ['', Validators.required],
      rememberMe: [false] // For the checkbox
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value); // Handle form submission
    }
  }

  get email() { return this.loginForm.get('email'); } // convenience getter for easier access in the template
  get password() { return this.loginForm.get('password'); }
}
