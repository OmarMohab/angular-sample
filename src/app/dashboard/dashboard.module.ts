import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PieChartModule } from '../pie-chart/pie-chart.module';
import { EmployeesTableModule } from '../employees-table/employees-table.module';
import { TasksComponent } from '../tasks/tasks.component';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    PieChartModule,
    EmployeesTableModule,
    TasksComponent
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
