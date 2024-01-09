import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesTableComponent } from './employees-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog'
import { AddEmployeeFormModule } from '../add-employee-form/add-employee-form.module';
import { MatSnackBarModule } from '@angular/material/snack-bar'; 


@NgModule({
  declarations: [
    EmployeesTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatDialogModule,
    AddEmployeeFormModule,
    MatSnackBarModule
  ],
  exports: [
    EmployeesTableComponent
  ]
})
export class EmployeesTableModule { }
