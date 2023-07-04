import { Component, OnInit, inject } from '@angular/core';
import { TodoList } from './interfaces/todo.interface';
import { TodoService } from './services/todo.service';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'todo-list-app';
  loading: boolean = false

  constructor(private router: Router){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        console.log("Start Component Load");
        this.loading = true
      }

      if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        console.log("End Component Load");
        setTimeout(() => this.loading = false, 1000)
      }
    })
  }

  private todoService = inject(TodoService)

  getMessage(message: string): string {
    return message
  }

  todoList: TodoList = []

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.todoService.getTodoList().subscribe(data => this.todoList = data)
  }

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
