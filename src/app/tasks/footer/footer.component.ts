import { Component, computed, inject } from '@angular/core';
import { TasksService } from '../../services/tasks/tasks.service';
import { FilterEnum } from '../enums/filter.enum';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ CommonModule, MatButtonToggleModule ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  tasksService = inject(TasksService);

  filterSig = this.tasksService.filterSig;
  filterEnum = FilterEnum;

  activeCount = computed(() => {
    return this.tasksService.tasksSig().filter(tasks => !tasks.isComplete).length;
  });

  noTasksClass = computed(() => {
    return this.tasksService.tasksSig().length === 0;
  });

  itemsLeftText = computed(() => {
    return `Item${this.activeCount() != 1 ? 's' : ''} Left`;
  });

  changeFilter(event: Event, filterName: FilterEnum): void {
    event.preventDefault();
    this.tasksService.changeFilter(filterName);
  }
}
