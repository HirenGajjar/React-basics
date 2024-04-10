import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppName from './components/AppName';
import AddTodo from './components/AddTodo';
import TodoItems from './components/TodoItems';
import WelcomeMessage from './components/WelcomeMessage';
import './App.css';
import { TodoItemContext } from './Store/todo-items-store';

function App() {
    const [newTodoItems, setNewTodoItems] = useState([]);

    const handleNewItem = (todoName, todoDueDate) => {
        setNewTodoItems((currVal) => [...currVal, { task: todoName, date: todoDueDate }]);
    }

    const handleDelete = (task) => {
        const newTodoItem = newTodoItems.filter((item) => item.task !== task);
        setNewTodoItems(newTodoItem);
    }

    return (
        <>
            <TodoItemContext.Provider value={{
                items:newTodoItems,
                addNewItem:handleNewItem,
                deleteItem:handleDelete
            }}>
                <center className='todo-container'>
                    <AppName />
                    <AddTodo />
                    {<WelcomeMessage />}
                    <TodoItems />
                </center>
            </TodoItemContext.Provider>
        </>
    );
}

export default App;