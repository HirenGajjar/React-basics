import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppName from './components/AppName';
import AddTodo from './components/AddTodo';
import TodoItems from './components/TodoItems';
import WelcomeMessage from './components/WelcomeMessage';
import './App.css';

function App() {
  const [newTodoItems, setNewTodoItems] = useState([]);

  const handleNewItem = (todoName, todoDueDate) => {
    const newTodoItem = { task: todoName, date: todoDueDate };
    setNewTodoItems([...newTodoItems, newTodoItem]);
  }


  const handleDelete = (task)=>{
    const newTodoItem = newTodoItems.filter((item)=>item.task !== task);
    setNewTodoItems(newTodoItem);
    console.log(task);

  }
  return (
    <>
      <center className='todo-container'>
        <AppName />
        <AddTodo handleNewItem={handleNewItem} />
        {newTodoItems.length === 0 && <WelcomeMessage todoItems={newTodoItems}/> }
        
        <TodoItems  todoItems={newTodoItems} handleDelete ={handleDelete}/>
      </center>
    </>
  );
}

export default App;
