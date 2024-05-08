import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'new-task',
  templateUrl: './new-task.component.html',
  styles: ``
})
export class NewTaskComponent {

  public task: Task = {
    id: '',
    title: '',
    description: '',
  }

  @Output()
  public onNewTask: EventEmitter<Task> = new EventEmitter();

  newTask(): void {
    if ( this.task.title.length === 0 ) return;

    this.onNewTask.emit(this.task);

    this.task = { id: '', title: '', description: '' };
  }

}
