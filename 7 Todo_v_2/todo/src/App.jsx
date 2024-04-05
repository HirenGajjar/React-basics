import 'bootstrap/dist/css/bootstrap.min.css';
import AppName from './components/AppName';
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';
import TodoItems from './components/TodoItems';

import './App.css';

function App(){
  const todoItems = [
    {task:'Task one',date:'March - 3- 2020'},
  {task:'Task two',date:'March - 4- 2020'},
  {task:'Task three',date:'March - 5- 2020'}
];
return <>


<center className='todo-container'>
  
  <AppName/>
  <AddTodo/>
  <TodoItems/>
 
  </center>
</>
}
export default App;