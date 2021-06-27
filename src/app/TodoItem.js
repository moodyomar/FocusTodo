import React from 'react';
import '../style/TodoItem.css'
import { FaTrash,FaList } from 'react-icons/fa';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { AiFillClockCircle } from 'react-icons/ai';
import { ImLoop2 } from 'react-icons/im';

const TodoItem = ({name,time,category,isCompleted}) => { 

return(

<div className=''>

<div className="todo d-flex align-items-center">
  <div className="col-2 ps-3">
<FaTrash 
onClick={() => console.log('delete single todo')
} className={`trash fs-6 me-1 ${isCompleted && 'isCompleted'}`} />
<IoIosCheckmarkCircle
onClick={() => console.log('mark done single todo')} className={`done fs-5 ${isCompleted && 'isCompleted'}`} />
  </div>
  <div className="col-7">
<div className="d-flex flex-column">
  <div className={`todoName ${isCompleted && 'isCompleted'}`}>
    {name}
  </div>
  <div className="todoTime">
    <AiFillClockCircle className="clock" />
    <AiFillClockCircle className="clock" />
  </div>
</div>
  </div>
  <div className="col-3 todoEndIcons pe-3">
    <div className="d-flex align-items-center justify-content-end">
    <ImLoop2 
    className="me-2" />
    <FaList className="me-1"
     /> {time}
    </div>
  </div>
</div>
</div>

)
}

export default TodoItem