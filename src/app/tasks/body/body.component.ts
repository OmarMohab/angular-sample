import { Component, computed, inject } from '@angular/core';
import { TasksService } from '../../services/tasks/tasks.service';
import { CommonModule, NgFor } from '@angular/common';
import { FilterEnum } from '../enums/filter.enum';
import { TaskComponent } from '../task/task.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [ CommonModule, TaskComponent, MatCheckboxModule ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  tasksService = inject(TasksService);

  editingId: number | null = null;

  visibleTasks = computed(() => {
    const tasks = this.tasksService.tasksSig();
    const filter   = this.tasksService.filterSig();

    if (filter === FilterEnum.active) {
      return tasks.filter(task => !task.isComplete);
    } else if (filter === FilterEnum.completed) {
      return tasks.filter(task => task.isComplete);
    }

    return tasks;
  });

  noTasksClass = computed(() => {
    return this.tasksService.tasksSig().length === 0;
  });

  setEditingId(editingId: number | null): void {
    this.editingId = editingId;
  }

}
