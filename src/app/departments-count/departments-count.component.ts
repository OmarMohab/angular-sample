import { Component, inject } from '@angular/core';
import { DepartmentsService } from '../services/departments/departments.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-departments-count',
  standalone: true,
  imports: [ MatIconModule ],
  templateUrl: './departments-count.component.html',
  styleUrl: './departments-count.component.css'
})
export class DepartmentsCountComponent {
  departmentsService = inject(DepartmentsService);
}
