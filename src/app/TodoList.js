import React, { useEffect } from 'react';
import TodoItem from './TodoItem';
import '../style/TodoList.css'
import { useSelector } from 'react-redux';

const TodoList = () => { 
const {studying,health} = useSelector(state => state.todoReducer.todos)


  useEffect(() => {
    console.log('update');
    
})

return(

<>

{ studying.length > 1 && 
<>
  <div className="todoCategory">
    Studying
  </div>
  {studying.map(item => {
if(!item.completed){
  return(
    <TodoItem 
    name={item.todo}
    time={item.time}
    category={item.category}
    isCompleted={item.completed}
     />
  )
}})}
  </>
  
}



{ health.length > 1 &&
<>
<div className="todoCategory">
    Health
  </div>
  {health.map(item => {
if(!item.completed){
  return(
    <TodoItem 
    name={item.todo}
    time={item.time}
    category={item.category}
    isCompleted={item.completed}
     />
  )
}})}
  </>

}
  

</>

)
}

export default TodoList