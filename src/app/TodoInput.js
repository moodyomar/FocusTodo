import React, { useEffect, useState } from 'react';
import '../style/TodoInput.css'
import { FaPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { getText } from '../redux/actions';


const TodoInput = () => {
  let [task, setTask] = useState('')
  const dispatch = useDispatch();
    useEffect(() => {
      if(task){
        // dispatch(getText())
        console.log('call');

        setTask('');
      }
      
  },[task])

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
              <div className="numbers">2.3</div>
              <div className="text">Estimated Time</div>
            </div>
            <div className="d-flex flex-column">
              <div className="numbers">3</div>
              <div className="text">Tasks to be Completed</div>
            </div>
            <div className="d-flex flex-column">
              <div className="numbers">8.1</div>
              <div className="text">Elapsed Time</div>
            </div>
            <div className="d-flex flex-column">
              <div className="numbers">3</div>
              <div className="text">Completed Tasks</div>
            </div>
          </div>
        </div>

        <div className="taskAdder">
          <FaPlus className="plus" />
          <input onKeyPress={(e) => e.key === 'Enter' && setTask(e.target.value)} type="text" placeholder="Add a task to “Studying” press Enter to save" defaultValue={task} />
        </div>

      </div>
    </div>

  )
}

export default TodoInput