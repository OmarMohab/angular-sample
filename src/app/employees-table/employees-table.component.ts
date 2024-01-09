import { AfterViewInit, Component, OnInit, ViewChild, inject } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Employee } from '../interfaces/Employee.interface';
import { EmployeesService } from '../services/employees/employees.service';
import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeFormComponent } from '../add-employee-form/add-employee-form.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BreakpointObserver } from '@angular/cdk/layout';


@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.css']
})
export class EmployeesTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Employee>;
  dataSource = new MatTableDataSource<Employee>;

  private snackBar = inject(MatSnackBar);
  private employeesService = inject(EmployeesService);
  public dialog = inject(MatDialog);
  public content: boolean = true;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'first_name', 'last_name', 'address', 'city', 'country', 'postal_code', 'department', 'actions'];

  ngAfterViewInit(): void {
    this.employeesService.employees$.subscribe(employees => {
      this.dataSource = new MatTableDataSource(employees);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddEmployeeFormComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.snackBarTrigger('Employee Added Successfully!');
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  removeEmployee(id: number) {
    this.employeesService.removeEmployee(id).subscribe(result => {
      console.log('from table component remove method subs');
      result ? this.snackBarTrigger('Employee Deleted') : this.snackBarTrigger('Couldnt delete the Employee!');
    });
  }

  editEmployee(employeeInfo: any) {
    const dialogRef = this.dialog.open(AddEmployeeFormComponent, {data: employeeInfo});
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.snackBarTrigger('Employee Updated Successfully!');
      }
    });
  }

  private snackBarTrigger(message: string) {
    this.snackBar.open(message, 'Dismiss', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3 * 1000
    });
  }
}
