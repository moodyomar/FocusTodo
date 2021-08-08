import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '../style/TodoCompleted.css'
import TodoItem from './TodoItem';

const TodoCompleted = () => { 

  const completedTodos = useSelector(state => state.todoReducer.todos.completedTodos);

  let [showCompleted,setShowCompleted] = useState(false)
  
return(
<>
<div className='text-center'>
{showCompleted ? <button onClick={() => {
  setShowCompleted(!showCompleted)
}}
 > Hide Completed Tasks</button> : <button onClick={() => {
  setShowCompleted(!showCompleted)
}}
 > Show Completed Tasks</button>}
</div>

{showCompleted && 
<div>
<div className="todoCategory">
    Today
  </div>

  {completedTodos.map(item => {

  return(
    <TodoItem 
    item={item}
     />
  )

})}

  </div>
  }
  
</>
)
}

export default TodoCompleted