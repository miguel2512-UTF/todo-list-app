import { Injectable } from '@angular/core';
import { Todo, TodoList } from '../interfaces/todo.interface';

let todoMock: TodoList = [
  {
    id: 1,
    name: "First ToDo",
    description: "This is a description",
    completed: false
  },
  {
    id: 2,
    name: "Second ToDo",
    description: "This is a description",
    completed: true
  }
]

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodoList(): Todo[] {
    return todoMock
  }

  createTodo(todo: Todo){
    todoMock.push(todo)
  }

  changeTodoCompleted(id: number) {
    todoMock.map(todo => {
      if (todo.id === id) {
        todo.completed = todo.completed ? false : true
      }
    })
  }

  deleteTodo(id: number) {
    const index = todoMock.findIndex(todo => todo.id === id)
    todoMock.splice(index, 1)
  }
}
