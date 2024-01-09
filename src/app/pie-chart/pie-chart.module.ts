import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieChartComponent } from './pie-chart.component';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    PieChartComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule
  ],
  exports: [
    PieChartComponent
  ]
})
export class PieChartModule { }
