import { Component, Input, inject } from '@angular/core';
import { Todo } from '../../interfaces/todo.interface'
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html'
})

export class ToDoComponent {
  @Input() todo!: Todo

  private todoService = inject(TodoService)
  
  completedTodo(id: number) {
    this.todoService.changeTodoCompleted(id)
  }

  deleteTodo(event: Event, id: number) {
    const todo = event.currentTarget as HTMLElement
    todo.parentElement?.parentElement?.classList.add("animate-remove")
    setTimeout(() => {
      this.todoService.deleteTodo(id)
    }, 500)
  }
}
