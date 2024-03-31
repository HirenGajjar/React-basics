import 'bootstrap/dist/css/bootstrap.min.css';
import AppName from './components/AppName';
import AddTodo from './components/AddTodo';
import TodoItemOne from './components/TodoItemOne';
import TodoItemTwo from './components/TodoItemTwo';
import './App.css';

function App(){
return <>
<center className='todo-container'><AppName/>

  
  <AddTodo/>
  <div className="item-container">
    < TodoItemOne/>
     <TodoItemTwo/>
  </div>
  </center>
</>
}
export default App;