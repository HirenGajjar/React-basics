
import { useState } from 'react';
import styles from './AddTodo.module.css';
import { IoMdAddCircle } from "react-icons/io";

function AddTodo({handleNewItem}){
let [todoName,setTodoName]=useState('');
let [todoDueDate,setDueDate]=useState('');

const handleNameChange = (e)=>{
  setTodoName(e.target.value);
}
const handleDueDateChange = (e)=>{
  setDueDate(e.target.value);
}

const addBtnClick=(e)=>{
  e.preventDefault();
    handleNewItem(todoName,todoDueDate);
    setDueDate("");
    setTodoName("");
}
    return(
    <div className="container">
     
      <form className="row allrow"   onSubmit={addBtnClick}>
          <div className="col-4">
            <input onChange={handleNameChange} 
          type="text" placeholder='Enter task'   
          value={todoName} /></div>
          <div className="col-4">
            <input onChange={handleDueDateChange} 
          type="date"  
          value={todoDueDate} /></div>
          <div className="col-2">
          
            <button className="btn btn-success allBtn"
            ><IoMdAddCircle /></button>
            
            
            </div>
        </form>
  
  </div>
    );
}
export default AddTodo;