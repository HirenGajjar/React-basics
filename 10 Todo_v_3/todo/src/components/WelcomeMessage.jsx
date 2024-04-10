import '../App.css';
import { TodoItemContext } from '../Store/todo-items-store';
import { useContext } from 'react';

const WelcomeMessage = () => {
    const { items } = useContext(TodoItemContext);
    return items.length === 0 && <center className="welcome">No task left</center>;
};

export default WelcomeMessage;