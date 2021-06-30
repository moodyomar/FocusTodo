import { ActionTypes } from "./ActionTypes"

export const addTodo = (todoInput,time,category,isCompleted) => { 
  return {
    type:ActionTypes.ADD_TODO,
    payload:{todoInput,time,category,isCompleted}
  }
}

export const completedTodo = (id) => { 
  return {
    type:ActionTypes.COMPLETE_TODO,
    payload:{id}
  }
}

export const deleteTodo = (id) => { 
  return {
    type:ActionTypes.DELETE_TODO,
    payload:{id}
  }
}