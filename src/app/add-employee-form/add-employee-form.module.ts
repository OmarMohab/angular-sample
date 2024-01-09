import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeeFormComponent } from './add-employee-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    AddEmployeeFormComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  exports: [
    AddEmployeeFormComponent
  ]
})
export class AddEmployeeFormModule { }
