import { Component, OnInit, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmployeesService } from '../services/employees/employees.service';
import { DepartmentsService } from '../services/departments/departments.service';
import { countries } from '../../assets/constants/countries';


@Component({
  selector: 'app-add-employee-form',
  templateUrl: './add-employee-form.component.html',
  styleUrls: ['./add-employee-form.component.css']
})
export class AddEmployeeFormComponent implements OnInit {
  
  private dialogRef: MatDialogRef<AddEmployeeFormComponent> = inject(MatDialogRef);
  private fb = inject(FormBuilder);
  private employeeService = inject(EmployeesService);
  public departmentsService = inject(DepartmentsService);
  public employeeInfo: any = inject(MAT_DIALOG_DATA);
  public countries = countries;

  employeeForm = this.fb.group({
    first_name: [null, Validators.required],
    last_name: [null, Validators.required],
    address: [null, Validators.required],
    city: [null, Validators.required],
    country: [null, Validators.required],
    postal_code: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    department: [null, Validators.required]
  });

  ngOnInit(): void {
    if (this.employeeInfo) {
      this.employeeForm.patchValue(this.employeeInfo);
    }  
  }

  cancel() {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      if (this.employeeInfo) {
        this.employeeService.updateEmployee(this.employeeInfo.id, this.employeeForm.value);
        this.dialogRef.close(true);
      } else {
        this.employeeService.addEmployee(this.employeeForm.value);
        this.dialogRef.close(true);
        };
    }
  }
}
  

