
import { useState } from 'react';
import styles from './AddTodo.module.css';

function AddTodo({handleNewItem}){
let [todoName,setTodoName]=useState();
let [todoDueDate,setDueDate]=useState();

const handleNameChange = (e)=>{
  setTodoName(e.target.value);
}
const handleDueDateChange = (e)=>{
  setDueDate(e.target.value);
}

const addBtnClick=()=>{
  handleNewItem(todoName,todoDueDate);
    setDueDate("");
    setTodoName("");
}
    return(
    <div className="container">
    <div className="row allrow">
    <div className="col-4">
      <input onChange={handleNameChange} 
    type="text" placeholder='Enter task'   
    value={todoName} /></div>
    <div className="col-4">
      <input onChange={handleDueDateChange} 
    type="date"  
    value={todoDueDate}/></div>
    <div className="col-2">
    
      <button className="btn btn-success allBtn"
      onClick={addBtnClick}
      >Add</button>
      
      
      </div>
  </div>
  </div>
    );
}
export default AddTodo;