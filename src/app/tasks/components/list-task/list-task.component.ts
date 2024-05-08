import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Status, Task } from '../../interfaces/task.interface';


@Component({
  selector: 'list-task',
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.css'
})
export class ListTaskComponent {

  @Input()
  public taskList: Task[] = [{
    title: '',
    description: '',
    status: 1
  }]

  @Input()
  public taskDone: Task[] = [{
    title: '',
    description: '',
    status: 2
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteTask( id?: string ): void {

    if ( !id ) return;
    this.onDelete.emit( id )

  }

  @Output()
  public onDeleteDone: EventEmitter<string> = new EventEmitter();

  onDeleteTaskDone( id?: string ): void {
    console.log(id);

    if ( !id ) return;
    this.onDeleteDone.emit( id )

  }

  @Output()
  public onDone: EventEmitter<Task> = new EventEmitter();

  onMoveDone( done?: Task ): void {
    if ( !done ) return;
    this.onDone.emit( done )
  }
}
