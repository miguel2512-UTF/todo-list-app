import { Injectable } from '@angular/core';
import { Todo, TodoList } from '../interfaces/todo.interface';

const getLocalStorageTodoList = () => {
  const todoList = localStorage.getItem('todoList')

  if (typeof todoList === 'string') {
    return JSON.parse(todoList) as TodoList
  }
  
  localStorage.setItem('todoList', JSON.stringify([]))
  return []
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

  getTodoList(): Todo[] {
    return this.todoList
  }

  createTodo(todo: Todo) {
    this.todoList.push(todo)
    saveTodoList(this.todoList)
  }

  changeTodoCompleted(id: number) {
    this.todoList.map(todo => {
      if (todo.id === id) {
        todo.completed = todo.completed ? false : true
      }
    })
    saveTodoList(this.todoList)
  }

  deleteTodo(id: number) {
    const index = this.todoList.findIndex(todo => todo.id === id)
    this.todoList.splice(index, 1)
    saveTodoList(this.todoList)
  }
}
