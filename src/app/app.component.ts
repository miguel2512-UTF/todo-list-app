import { Component, inject } from '@angular/core';
import { TodoList } from './interfaces/todo.interface';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'todo-list-app';
  
  private todoService = inject(TodoService)

  getMessage(message: string): string {
    return message
  }

  todoList = this.todoService.getTodoList();

  createTodo(event: Event){
    const element = event.currentTarget as HTMLInputElement
    const todo = {
      id: this.todoList.length + 1,
      name: element.value,
      description: "",
      completed: false
    }
    this.todoService.createTodo(todo)
  }
}
