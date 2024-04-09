
import { useRef } from 'react';
import styles from './AddTodo.module.css';
import { IoMdAddCircle } from "react-icons/io";

function AddTodo({handleNewItem}){

const taskRef=useRef();
const dateRef=useRef();

const addBtnClick=(e)=>{
  e.preventDefault();
  const taskCurrentVal = taskRef.current.value;
  const dateCurrentVal = dateRef.current.value;
  console.log(taskCurrentVal,dateCurrentVal);
    handleNewItem(taskCurrentVal,dateCurrentVal);
    taskRef.current.value="";
    dateRef.current.value="";
}
    return(
    <div className="container">
     
      <form className="row allrow"   onSubmit={addBtnClick}>
          <div className="col-4">
            <input  
            ref={taskRef}
            type="text"
            placeholder='Enter task'   
             /></div>
          <div className="col-4">
            <input  
            ref={dateRef}
            type="date"  
             /></div>
          <div className="col-2">
          
            <button className="btn btn-success allBtn"
            ><IoMdAddCircle /></button>
            
            
            </div>
        </form>
  
  </div>
    );
}
export default AddTodo;