import React, {useRef } from 'react';
import '../style/TodoInput.css'
import { FaPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/actions/todoActions';



const TodoInput = () => {

let selectedCategory = useRef();

// state managment
let {estimatedTime,
  tasksToBeCompleted,
  elapsedTime,
  completedTasks} = useSelector(state => state.todoReducer);

let dispatch = useDispatch();

const onHittingEnter = (e) => {
  let category = selectedCategory.current.value;
  let d = new Date()
  let getDay = d.getDay()
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let day = days[getDay-1]
  if(e.code === 'Enter' && e.target.value.length > 5){
   dispatch(addTodo(e.target.value,day,category,false));
  }
    
  
  }


  return (

    <div className=' '>
      <div className="d-flex flex-column">

        <div className="DaySortBar d-flex justify-content-between">
        <div className="day">Today</div>
        <div className="sort">Sort</div>
        </div>

        <div className="headerInfo mb-3">
          <div className="d-flex">
            <div className="d-flex flex-column">
              <div className="numbers">{estimatedTime}</div>
              <div className="text">Estimated Time</div>
            </div>
            <div className="d-flex flex-column">
              <div className="numbers">{tasksToBeCompleted}</div>
              <div className="text">Tasks to be Completed</div>
            </div>
            <div className="d-flex flex-column">
              <div className="numbers">{elapsedTime}</div>
              <div className="text">Elapsed Time</div>
            </div>
            <div className="d-flex flex-column">
              <div className="numbers">{completedTasks}</div>
              <div className="text">Completed Tasks</div>
            </div>
          </div>
        </div>

        <div className="taskAdder">
          <FaPlus className="plus" />
          <input onKeyPress={(e) => onHittingEnter(e)} type="test" placeholder="Add a task to “Studying” press Enter to save" />
          <select className="mySelect" onChange={() => {console.log(selectedCategory)
          }} ref={selectedCategory} >
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