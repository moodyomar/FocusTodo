import React, { useEffect } from 'react';
import TodoItem from './TodoItem';
import '../style/TodoList.css'
import { useSelector } from 'react-redux';

const TodoList = () => { 
const {studying,health,work} = useSelector(state => state.todoReducer.todos)


  useEffect(() => {
    console.log('update');
    
})

return(

<>

{
studying.length > 0 &&
<>
<div className="todoCategory">
    Studying
  </div>
  {studying.map(item => {
if(!item.completed){
  return(
    <TodoItem key={item.id}
    item={item}
     />
  )
}})}
</>
}


{
health.length > 0 &&
<>
<div className="todoCategory">
    Health
  </div>
  <div className="todosBody">
  {health.map(item => {
if(!item.completed){
  return(
    <TodoItem key={item.id}
    item={item}
     />
  )
}})}
</div>
</>
}


{
work.length > 0 &&
<>
<div className="todoCategory">
    Work
  </div>
  {work.map(item => {
if(!item.completed){
  return(
    <TodoItem key={item.id}
    item={item}
     />
  )
}})}

</>
}

</>

)
}

export default TodoList