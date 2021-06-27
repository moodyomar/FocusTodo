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
}

})}

<div className="todoCategory">
    Health
  </div>
  {/* {health.map(item => (
  <TodoItem todoName={item.todo} />
))} */}
</>

)
}

export default TodoList