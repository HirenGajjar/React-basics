
import styles from './AddTodo.module.css';

function AddTodo(){
    return(
    <div className="container">
    <div className="row allrow">
    <div className="col-4"><input type="text" placeholder='Enter task'  /></div>
    <div className="col-4"><input type="date" name="" id="" /></div>
    <div className="col-2"   ><button className="btn btn-success allBtn">Add</button></div>
  </div>
  </div>
    );
}
export default AddTodo;