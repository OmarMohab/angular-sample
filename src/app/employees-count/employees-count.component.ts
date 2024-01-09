import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { EmployeesService } from '../services/employees/employees.service';

@Component({
  selector: 'app-employees-count',
  standalone: true,
  imports: [ MatIconModule ],
  templateUrl: './employees-count.component.html',
  styleUrl: './employees-count.component.css'
})
export class EmployeesCountComponent {
  employeesService = inject(EmployeesService);
}
