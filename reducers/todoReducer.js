
import { v4 as uuidv4 } from 'uuid';
const todo=[
    {
      id:uuidv4,
      complete:false,
      title:"task"

    }
]
const todoReducer=(state=todo,action)=>{
  switch (action.payload) {
    case ADD: return [...state,{title:action.payload, id:uuidv4,complete:false}]

    break;

    default: return state

  }
    

}
export default todoReducer