import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild, inject } from '@angular/core';
import { Task } from '../../interfaces/Task.interface';
import { CommonModule } from '@angular/common';
import { TasksService } from '../../services/tasks/tasks.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [ CommonModule, MatCheckboxModule, MatInputModule, MatButtonModule, MatIconModule, MatDividerModule ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit, OnChanges {
  @Input({ required: true }) task!: Task;
  @Input({ required: true }) isEditing!: boolean;
  @Output() setEditingId: EventEmitter<number | null> = new EventEmitter();
  @ViewChild('textInput') textInput?: ElementRef

  tasksService = inject(TasksService)

  editingText: string = '';

  ngOnInit(): void {
    this.editingText = this.task.text;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isEditing'].currentValue) {
      setTimeout(() => {
        this.textInput?.nativeElement.focus();
      }, 0);
    }
  }

  changeText(event: Event) {
    const value = (event.target as HTMLInputElement).value
    this.editingText = value;
  }

  changeTask() {
    this.tasksService.changeTask(this.task.id, this.editingText);
    this.setEditingId.emit(null);
  }

  setTaskInEditMode(): void {
    this.setEditingId.emit(this.task.id);
  }

  removeTask(): void {
    this.tasksService.removeTask(this.task.id).subscribe(result => {
      console.log(result);
    });
  }

  toggleTask(): void {
    this.tasksService.toggleTask(this.task.id);
  }
}
