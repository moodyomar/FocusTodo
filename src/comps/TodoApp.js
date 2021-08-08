import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoCompleted from './TodoCompleted';
import '../style/TodoApp.css'


const TodoApp = () => { 

return(

<div className='todoApp'>
<TodoInput />
<TodoList />
<TodoCompleted />
</div>

)
}

export default TodoApp