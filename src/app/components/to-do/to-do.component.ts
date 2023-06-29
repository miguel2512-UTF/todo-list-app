import { Component, Input, inject } from '@angular/core';
import { Todo } from '../../interfaces/todo.interface'
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.sass']
})

export class ToDoComponent {
  @Input() todo!: Todo

  private todoService = inject(TodoService)
  
  completedTodo(id: number) {
    this.todoService.changeTodoCompleted(id)
    console.log(this.todoService.getTodoList());
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id)
    console.log(this.todoService.getTodoList());
  }
}
