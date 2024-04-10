import TodoItem from './TodoItem';
import { useContext } from 'react';
import { TodoItemContext } from '../Store/todo-items-store';

const TodoItems = () => {
    const { todoItems } = useContext(TodoItemContext);

    return (
        <div className="item-container">
            {todoItems.items && todoItems.items.length > 0 ? (
                todoItems.items.map((todoItem) => (
                    <TodoItem
                        key={todoItem.task}
                        handleDelete={todoItems.deleteItem}
                        date={todoItem.date}
                        task={todoItem.task}
                    />
                ))
            ) : (
                <p>No items available</p>
            )}
        </div>
    );
};

export default TodoItems;