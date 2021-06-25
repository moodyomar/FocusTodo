const initState ={
test1: 'some text',
test2: 2,
}

const todoReducer = (state = initState, {type,payload}) => {
  switch (type) {
    case 'GET_TEXT':
      
      return state.test1;
  
      case 'INC_TEST2':
      
        return state.test2 + 1;

    default:
      return state;
  }
}

export default todoReducer;