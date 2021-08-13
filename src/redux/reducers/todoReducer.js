import { ActionTypes } from '../actions/ActionTypes';
const { ADD_TODO, COMPLETE_TODO, DELETE_TODO } = ActionTypes;


const initState = {

  todos: {

    studying: [

      
    ],
    health: [
   
    ],
    work:[],
    completedTodos:[
      
    ]

  },

  estimatedTime: 2.3,
  elapsedTime: 8.1,

}

const todoReducer = (state = initState, { type, payload }) => {

  let allTodos = [...state.todos.health,...state.todos.studying,...state.todos.work];

  switch (type) {
    
    
    case ADD_TODO:
      let dispatchedTodo = {
        id: Date.now(),
        todo: payload.todoInput,
        time: payload.time,
        category: payload.category,
        completed: payload.isCompleted,
      }

      switch (payload.category) {
        case 'Studying':
          return { ...state,todos:{...state.todos,
            studying:[...state.todos.studying,dispatchedTodo] }};
        case 'Health':
          return { ...state,todos:{...state.todos,
            health:[...state.todos.health,dispatchedTodo]}};
        case 'Work':
          return { ...state,todos:{...state.todos,
            health:[...state.todos.health,dispatchedTodo]}};
      }

      case COMPLETE_TODO:
      let todoFromSentId = allTodos.filter(todo => todo.id == payload.id);
      let completedTodo;
      todoFromSentId.map(todo => {
        todo.completed = true;
        completedTodo = todo;
      })
      
       return { ...state,todos:{...state.todos,
         completedTodos:[...state.todos.completedTodos,completedTodo] }}

         
      case DELETE_TODO:
      let new_ar = allTodos.filter(todo => todo.id !== payload.id);
      console.log(new_ar);
        // still in work
        return state


    default:
      return state;
  }
}

export default todoReducer;