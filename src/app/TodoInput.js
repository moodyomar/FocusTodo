import React from 'react';
import '../style/TodoInput.css'
import { FaPlus } from 'react-icons/fa';


const TodoInput = () => {

  return (

    <div className=' '>
      <div className="d-flex flex-column">

        <div className="headerInfo mb-3 mt-5">

        </div>
        <div className="taskAdder">
          <FaPlus className="plus" /><input type="text" placeholder="Add a task to “Studying” press Enter to save" />
        </div>

      </div>
    </div>

  )
}

export default TodoInput