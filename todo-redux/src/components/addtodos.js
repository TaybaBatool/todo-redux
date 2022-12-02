import "../app.css";
import { useState } from 'react';
import Showtodos from "./Listedtodos";
import { connect } from "react-redux";
import {
  addTodosR,
  } from "../redux/reducer";
  import { useSelector, useDispatch } from 'react-redux'

const Todocompo =(props) =>{

  const satus = useSelector((state) => state.data)
  const dispatch = useDispatch()
    const [todo, settodo] = useState('')

    const onclick =() =>{
        if(todo==""){
          alert ("please enter todo value")
          return
        }
        const obj = {
          id : Math.random(),
          todovalue: todo,
          status:'active'
        }
        if(satus)
        {
        
        dispatch(addTodosR([...satus,obj]))
        }
        else
        {
          dispatch((addTodosR[obj]))
        }
        settodo("");
      }
      const onchange = (e)=>{
        settodo(e.target.value);
      
        }
return  (
<div className="App">
        <h1 className="title">
            Todo App
        </h1>
<div className='takeinput'>
<input
type='text'
value = {todo}
className="todo-input"
onChange={(e) => onchange(e)}
/> 
<input 
className="sub-mit"
type='button'
value = 'Add'
onClick=  { () => onclick()}
/>

</div>
</div>)

}


export default Todocompo;
//