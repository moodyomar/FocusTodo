import React from 'react';
import '../style/TodoItem.css'
import { FaTrash, FaRunning } from 'react-icons/fa';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { AiFillClockCircle } from 'react-icons/ai';
import { ImLoop2 } from 'react-icons/im';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { MdWork, MdFilterNone } from 'react-icons/md';
import { completedTodo, deleteTodo } from '../redux/actions/todoActions';
import { useDispatch } from 'react-redux';


const TodoItem = ({ item }) => {

  const dispatch = useDispatch()

  const findCategory = (_cat) => {

    switch (_cat) {
      case 'Studying':

        return <HiOutlineBookOpen
          className="me-1 fs-6" />;

      case 'Health':
        return <FaRunning className="me-1 fs-6" />;

      case 'Work':

        return <MdWork className="me-1 fs-6" />

      default:
        return <MdFilterNone className="me-1 fs-6" />
    }
  }

  // const todoClocksNumber = (_clocks) => { 
  //   let clocks_ar = Array(_clocks)
  //   console.log(clocks_ar);
  //   clocks_ar.map(cl => ( <ImLoop2 className="me-2" /> ))
    
  // }

return (

  <div className=''>

    <div className="todo d-flex align-items-center">
      <div className="col-2 ps-3">
        <FaTrash
          onClick={() => dispatch(deleteTodo(item.id))
          } className={`trash fs-6 me-1 ${item.completed && 'isCompleted'}`} />
        <IoIosCheckmarkCircle
          onClick={() => dispatch(completedTodo(item.id)) } className={`done fs-5 ${item.completed && 'isCompleted'}`} />
      </div>
      <div className="col-7">
        <div className="d-flex flex-column">
          <div className={`todoName ${item.completed && 'isCompleted'}`}>
            {item.todo}
          </div>
          <div className="todoTime">
            
            <AiFillClockCircle className="clock" />
            <AiFillClockCircle className="clock" />

            {/* {todoClocksNumber(3)} */}

          </div>
        </div>
      </div>
      <div className="col-3 todoEndIcons pe-3">
        <div className="d-flex align-items-center justify-content-end">
          <ImLoop2
            className="me-2" />

          { findCategory(item.category) }

          {item.time}
        </div>
      </div>
    </div>
  </div>

)
}

export default TodoItem