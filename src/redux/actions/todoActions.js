import { ActionTypes } from "./ActionTypes"

export const addTodo = (todoInput,time,category,isCompleted) => { 
  return {
    type:ActionTypes.ADD_TODO,
    payload:{todoInput,time,category,isCompleted}
  }
}