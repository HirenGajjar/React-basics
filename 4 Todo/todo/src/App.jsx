import 'bootstrap/dist/css/bootstrap.min.css';
import AppName from './components/AppName';
import AddTodo from './components/AddTodo';


function App(){
return <>
<center className='todo-container'><AppName/></center>

<div className="container text-center">
  
<AddTodo/>
  <div className="row">
    <div className="col-4">Task 1</div>
    <div className="col-4">March 3 2023</div>
    <div className="col-2"><button className="btn btn-danger">Delete</button></div>
  </div>
  <div class="row">
    <div className="col-4">Task 2</div>
    <div className="col-4">August 11 2023</div>
    <div className="col-2"><button className="btn btn-danger">Delete</button></div>
  </div>
</div>
</>
}
export default App;