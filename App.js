
import './App.css';
import React,{useState} from 'react';
import { UseSelector,useDispatch } from 'react-redux';
import todoReducer from './reducers/todoReducer';
import { addTodo } from './actions/todoAction';
function App() {
  const [task,setTask] = useState ("")
  const todos=UseSelector(state=>state.todoReducer)
  const dispatch=useDispatch()
  return (
    <div className="App">
      <header className="App-header">
        <input type='text' placeholder='add task...' onChange={(e)=>setTask(e.target.value)}/>
        <button onClick={()=>dispatch(addTodo(task))}>add task</button>
       {todos.map(el=><div>
        <h2>{el.title}</h2>
       </div>)}
      </header>
    </div>
  );
}

export default App;
