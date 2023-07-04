import { Injectable } from '@angular/core';
import { Todo, TodoList } from '../interfaces/todo.interface';
import { Observable, of, map } from 'rxjs';

const getLocalStorageTodoList = () => {
  const todoList = localStorage.getItem('todoList')

  if (typeof todoList === 'string') {
    return of(JSON.parse(todoList) as TodoList)
  }

  localStorage.setItem('todoList', JSON.stringify([]))
  return of([])
}

const saveTodoList = (todoList: Array<Todo>) => {
  localStorage.setItem('todoList', JSON.stringify(todoList))
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoList = getLocalStorageTodoList()

  constructor() { }

  getTodoList(): Observable<Todo[]> {
    return this.todoList
  }

  createTodo(todo: Todo) {
    this.todoList.subscribe(
      data => {
        data.push(todo)
        saveTodoList(data)
      }
    )
    .unsubscribe()
  }

  changeTodoCompleted(id: number) {
    this.todoList.subscribe(
      data => {
        data.map(todo => {
          if (todo.id === id) {
            todo.completed = todo.completed ? false : true
          }
        })
        saveTodoList(data)
      }
    )
    .unsubscribe()
  }

  deleteTodo(id: number) {
    this.todoList.subscribe(
      data => {
        const index = data.findIndex(todo => todo.id === id)
        data.splice(index, 1)
        saveTodoList(data)
      }
    )
    .unsubscribe()
  }
}
