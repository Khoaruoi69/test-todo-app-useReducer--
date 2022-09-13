import logo from './logo.svg';
import './App.css';
import reducer, {initState} from './Store/reducer';
import { useReducer, useState } from 'react';
import { setTodo, AddTodo,DeleteTodo } from './Store/action';

function App() {
  const [state,dispatch] = useReducer(reducer, initState);
  const {job, jobs} = state;
 // const [check,setCheck] = useState([])
  const handleSubmit =()=>{
    dispatch(AddTodo(job));
    dispatch(setTodo(''));
  }
  // const handleCheck =(index)=>{
  //   setCheck((prev) =>{
  //     const ischeck = check.includes
  //   })
  // }
  return (
    <div style={{padding:100}}>
      <h1> Todo App</h1>
      <input value={job.name}
        placeholder="Enter job ..."
        onChange={e=>{
          dispatch(setTodo(e.target.value))
        }}
      />
      <button onClick={handleSubmit}> Create</button>

      <ul>
        {jobs.map((job) =>(
          <li key={job.id}>
          <input type="checkbox" /> {job.name} 
          <span type="chechbox"> </span>
          <span onClick={()=>dispatch(DeleteTodo(job.id))}>  X</span>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
