import React from 'react';
import TodoItem from './TodoItem';
import '../style/TodoList.css'

const TodoList = () => { 

return(

<>
  <div className="todoCategory">
    Studying
  </div>
<TodoItem />
<TodoItem />
<div className="todoCategory">
    Studying
  </div>
<TodoItem />
</>

)
}

export default TodoList