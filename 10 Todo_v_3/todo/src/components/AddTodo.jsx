
import { useRef } from 'react';
import styles from './AddTodo.module.css';
import { IoMdAddCircle } from "react-icons/io";
import { useContext } from 'react';
import { TodoItemContext } from '../Store/todo-items-store';

function AddTodo(){
  const {addNewItem} = useContext(TodoItemContext);
const taskRef=useRef();
const dateRef=useRef();

const addBtnClick=(e)=>{
  e.preventDefault();
  const taskCurrentVal = taskRef.current.value;
  const dateCurrentVal = dateRef.current.value;
    addNewItem(taskCurrentVal,dateCurrentVal);
    taskRef.current.value="";
    dateRef.current.value="";
}
return (
  <div className={styles.container}>
      <form className="row allrow" onSubmit={addBtnClick}>
          <div className="col-4">
              <label>
                  Task:
                  <input ref={taskRef} type="text" placeholder="Enter task" />
              </label>
          </div>
          <div className="col-4">
              <label>
                  Date:
                  <input ref={dateRef} type="date" />
              </label>
          </div>
          <div className="col-2">
              <button type="submit" className="btn btn-success allBtn">
                  <IoMdAddCircle />
              </button>
          </div>
      </form>
  </div>
);

}
export default AddTodo;