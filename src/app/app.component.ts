import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  selectedIndex = signal(0);
  readonly totalTabs = 10;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      step1: this.fb.group({
        name: [''],
        age: [''],
        gender: ['male']
      }),
      step2: this.fb.group({
        country: [''],
        city: [''],
        contact: ['email']
      }),
      step3: this.fb.group({
        email: [''],
        phone: [''],
        newsletter: ['yes']
      }),
      step4: this.fb.group({
        username: [''],
        password: [''],
        role: ['user']
      }),
      step5: this.fb.group({
        address: [''],
        zipcode: [''],
        state: ['']
      }),
      step6: this.fb.group({
        paymentType: ['credit'],
        cardNumber: [''],
        installments: ['1']
      }),
      step7: this.fb.group({
        hasVehicle: ['no'],
        vehicleType: ['car'],
        color: ['red']
      }),
      step8: this.fb.group({
        company: [''],
        position: [''],
        experienceYears: ['']
      }),
      step9: this.fb.group({
        hobby: ['sports'],
        skillLevel: ['beginner'],
        frequency: ['weekly']
      }),
      step10: this.fb.group({
        termsAccepted: ['no'],
        shareData: ['no'],
        notes: ['']
      })
    });
  }

  get isFirst(): boolean { return this.selectedIndex() === 0; }
  get isLast(): boolean { return this.selectedIndex() === this.totalTabs - 1; }

  // Form group getters for template binding
  get step1(): FormGroup { return this.form.get('step1') as FormGroup; }
  get step2(): FormGroup { return this.form.get('step2') as FormGroup; }
  get step3(): FormGroup { return this.form.get('step3') as FormGroup; }
  get step4(): FormGroup { return this.form.get('step4') as FormGroup; }
  get step5(): FormGroup { return this.form.get('step5') as FormGroup; }
  get step6(): FormGroup { return this.form.get('step6') as FormGroup; }
  get step7(): FormGroup { return this.form.get('step7') as FormGroup; }
  get step8(): FormGroup { return this.form.get('step8') as FormGroup; }
  get step9(): FormGroup { return this.form.get('step9') as FormGroup; }
  get step10(): FormGroup { return this.form.get('step10') as FormGroup; }

  nextTab(): void {
    if (!this.isLast) this.selectedIndex.update(index => index + 1);
  }

  prevTab(): void {
    if (!this.isFirst) this.selectedIndex.update(index => index - 1);
  }
}
