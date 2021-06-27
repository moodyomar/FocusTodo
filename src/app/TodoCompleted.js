import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '../style/TodoCompleted.css'
import TodoItem from './TodoItem';

const TodoCompleted = () => { 
  const {studying} = useSelector(state => state.todoReducer.todos)
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
  {studying.map(item => {
if(item.completed){
  return(
    <TodoItem 
    name={item.todo}
    time={item.time}
    category={item.category}
    isCompleted={item.completed}
     />
  )
}

})}
  </div>
  }
  
</>
)
}

export default TodoCompleted