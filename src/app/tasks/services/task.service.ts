import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Status, Task } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  public tasks: Task[] = [
    {
      id: uuid(),
      title: 'Compra',
      description: 'cebollas, ajos....',
      status: 1
    }
  ]

  public done: Task[] = [
    {
      id: uuid(),
      title: '',
      description: '',
      status: 2
    }
  ]

  constructor() {
    this.loadLocalStorage();
  }

  private saveLocalStorage() {
    localStorage.setItem( 'tasks', JSON.stringify( this.tasks ));
    localStorage.setItem( 'done', JSON.stringify( this.done ));
  }

  private loadLocalStorage() {
    if ( !localStorage.getItem( 'tasks' )) return;

    this.tasks = JSON.parse( localStorage.getItem( 'tasks' )!);

    if ( !localStorage.getItem( 'done' )) return;

    this.done = JSON.parse( localStorage.getItem( 'done' )!);
  }

  addTask( task: Task ): void{
    const newTask: Task = { id: uuid(), ...task };

    this.tasks.push(newTask);
    this.saveLocalStorage();
  }

  deletedById( id: string ) {
    this.tasks = this.tasks.filter( task => task.id !== id );
    this.saveLocalStorage();
  }

  deletedByIdDone( id: string ) {
    console.log(id);
    this.done = this.done.filter( task => task.id !== id );
    this.saveLocalStorage();

  }

  moveToDone ( done: Task ) {
    const newTask: Task = { id: done.id, title: done.title, description: done.description, status: done.status };
    this.done.push(newTask);
    console.log(newTask);


    if (done.id) {
      this.deletedById(done.id)
    }
    this.saveLocalStorage();
  }
}
