import { Component, computed, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { TasksService } from '../../services/tasks/tasks.service';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ MatInputModule, MatIconModule, MatCheckboxModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private tasksService = inject(TasksService);
  text: string = '';

  
  isAllTasksSelected = computed(() => {
    return this.tasksService.tasksSig().every(task => task.isComplete);
  });

  changeText(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.text = target.value;
  }

  addTask(): void {
    this.tasksService.addTask(this.text);
    this.text = '';
  }

  
  toggleAllTasks(checked: boolean): void {
    this.tasksService.toggleAllTasks(checked);
  }
}
