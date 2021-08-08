import React, {useRef } from 'react';
import '../style/TodoInput.css'
import { FaPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/actions/todoActions';



const TodoInput = () => {
let selectedCategory = useRef();
let inputRef = useRef();

// state managment
let {estimatedTime,
  elapsedTime,
  } = useSelector(state => state.todoReducer);

 let completedTodos = useSelector(state => state.todoReducer.todos.completedTodos.length);
 let {studying,health,work} = useSelector(state => state.todoReducer.todos);
let todosToBeCompleted = [...studying,...health,...work].length;
console.log(todosToBeCompleted);

let dispatch = useDispatch();
const d = new Date()
const getDay = d.getDay()
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const day = days[getDay-1]

const scanTodoInput = (e) => {
  let category = selectedCategory.current.value;
  let input = inputRef.current.value;
  if(e.code === 'Enter' || e.type === 'click'){
    if(input.length > 5){
      dispatch(addTodo(input,day,category,false));
      inputRef.current.value = ' '
    }else{
      alert('Please enter a valid todo')
    }  
  }
  }


  return (

    <div className=' '>
      <div className="d-flex flex-column">

        <div className="DaySortBar d-flex justify-content-between">
        <div className="day">{day}</div>
        <div className="sort">Sort</div>
        </div>

        <div className="headerInfo mb-3">
          <div className="d-flex">
            <div className="d-flex flex-column">
              <div className="numbers">{estimatedTime}</div>
              <div className="text">Estimated Time</div>
            </div>
            <div className="d-flex flex-column">
              <div className="numbers">{todosToBeCompleted}</div>
              <div className="text">Tasks to be Completed</div>
            </div>
            <div className="d-flex flex-column">
              <div className="numbers">{elapsedTime}</div>
              <div className="text">Elapsed Time</div>
            </div>
            <div className="d-flex flex-column">
              <div className="numbers">{completedTodos}</div>
              <div className="text">Completed Tasks</div>
            </div>
          </div>
        </div>

        <div className="taskAdder">
          <FaPlus onClick={(e) => scanTodoInput(e)} className="plus" />

          <input onKeyPress={(e) => scanTodoInput(e)} type="test" placeholder="Add a task to “Work” press Enter to save" ref={inputRef} />
          <select className="mySelect" ref={selectedCategory} >
            <option value="Studying">Studying</option>
            <option value="Health">Health</option>
            <option value="Work">Work</option>
          </select>
        </div>
      </div>
    </div>

  )
}

export default TodoInput