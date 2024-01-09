import { Injectable, inject, signal } from '@angular/core';
import { Task } from '../../interfaces/Task.interface';
import { FilterEnum } from '../../tasks/enums/filter.enum';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private http = inject(HttpClient);

  tasksSig = signal<Task[]>([]);
  filterSig = signal<FilterEnum>(FilterEnum.all);

  constructor() {
    this.fetchTasks()
  }

  fetchTasks() {
    this.http.get<Task[]>('https://test-api-vijd.onrender.com/tasks').subscribe(fetchedTasks => {
      this.tasksSig.update(tasks => fetchedTasks)
    }
    )
  }

  addTask(text: string): void {
    this.http.post<Task>('https://test-api-vijd.onrender.com/tasks', { text: text }).subscribe(createdTask => {
      this.tasksSig.update((tasks) => [...tasks, createdTask]);
    });
  }

  changeFilter(filterName: FilterEnum): void {
    this.filterSig.set(filterName);
  }

  changeTask(id: number, text: string): void {
    this.http.patch<Task>('https://test-api-vijd.onrender.com/tasks/' + id, { text: text }).subscribe(updatedTask => {
      this.tasksSig.update((tasks) =>
      tasks.map((task) => (task.id === id ? updatedTask : task))
      );
    })
  }

  toggleTask(id: number): void {
    let task = this.tasksSig().find(task => task.id == id);
    if (task) {
      this.http.patch<Task>('https://test-api-vijd.onrender.com/tasks/' + id, { isComplete: !task.isComplete }).subscribe(updatedTask => {
        this.tasksSig.update((tasks) =>
          tasks.map((task) => (task.id === id ? updatedTask : task))
        );
      })
    }
  }

  toggleAllTasks(isComplete: boolean) {
    
    this.tasksSig.update((tasks) =>
      tasks.map((task) => ({ ...task, isComplete }))
    );
  }

  removeTask(id: number): Observable<boolean> {
    this.tasksSig.update((tasks) =>
      tasks.filter(task => task.id !== id)
    );
    return this.http.delete<boolean>('https://test-api-vijd.onrender.com/tasks/' + id)
  }
}
