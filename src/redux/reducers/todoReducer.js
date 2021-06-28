import { ActionTypes } from '../actions/ActionTypes';
const { ADD_TODO, COMPLETE_TODO, DELETE_TODO } = ActionTypes;



const initState = {

  todos: {

    studying: [

      { id: Date.now(), todo: 'Become a Full-Stack Developer', time: 'today', category: 'Studying', completed: false },
      { id: Date.now(), todo: 'Read a book', time: 'today', category: 'Studying', completed: false },
      { id: Date.now(), todo: 'Start a todo project', time: 'today', category: 'Studying', completed: true },
    ],
    health: [

      { id: Date.now(), todo: 'Hit the gym', time: 'today', category: 'Health', completed: false },
      { id: Date.now(), todo: 'Go for a run', time: 'today', category: 'Health', completed: false },
    ],

  },

  estimatedTime: 2.3,
  tasksToBeCompleted: 3,
  elapsedTime: 8.1,
  completedTasks: 3,
}

const todoReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      let dispatchedTodo = {
        id: Date.now(),
        todo: payload.todoInput,
        time: payload.time,
        category: payload.category,
        completed: payload.isCompleted,
      }


      return { ...state,todos:{
        studying:[...state.todos.studying,dispatchedTodo],

      }}



    default:
      return state;
  }
}

export default todoReducer;