import React, { useEffect, useRef, useState } from 'react';
import '../style/TodoInput.css'
import { FaPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/actions/todoActions';



const TodoInput = () => {

// state managment
let {estimatedTime,
  tasksToBeCompleted,
  elapsedTime,
  completedTasks,todos} = useSelector(state => state.todoReducer);

let dispatch = useDispatch();

const onHittingEnter = (e) => {
  if(e.code === 'Enter' && e.target.value.length > 5){
   dispatch(addTodo(e.target.value,'16:00','Sport',false));
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
        </div>

      </div>
    </div>

  )
}

export default TodoInput