export interface Todo {
    id: number,
    name: string,
    description: string,
    completed: boolean   
}

export type TodoList = Todo[]