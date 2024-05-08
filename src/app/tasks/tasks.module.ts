import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTaskComponent } from './components/list-task/list-task.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './pages/main-page.component';



@NgModule({
  declarations: [
    ListTaskComponent,
    NewTaskComponent,
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class TasksModule { }
