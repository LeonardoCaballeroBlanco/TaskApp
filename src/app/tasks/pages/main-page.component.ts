import { Component, OnInit } from '@angular/core';
import { Status, Task } from '../interfaces/task.interface';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})

export class MainPageComponent {

  constructor( private taskService: TaskService ) { }

  get tasks(): Task[] {
    return [...this.taskService.tasks];
  }

  get doing(): Task[] {
    return [...this.taskService.done];
  }

  onNewTask( task: Task ) {
    this.taskService.addTask( task );
  }

  onDeleteTask( id: string ): void {
    this.taskService.deletedById( id );
  }

  onDeleteTaskDone( id: string ): void {
    this.taskService.deletedByIdDone( id );
  }

  onMoveDone( status: Task ): void {
    this.taskService.moveToDone( status );
  }
}
