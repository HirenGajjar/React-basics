import TodoItem from './TodoItem';

const TodoItems = ({todoItems,handleDelete})=>{
    return (<>
    
    <div className="item-container">
        {
            todoItems.map((todoItems)=>
            <TodoItem
            key={todoItems.task}
            handleDelete={handleDelete}
            date={todoItems.date}
            task={todoItems.task}/>
        )
        }    
  </div>
    </>);
}
export default TodoItems