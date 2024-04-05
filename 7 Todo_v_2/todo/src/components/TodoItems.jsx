import TodoItem from './TodoItem';

const TodoItems = ({todoItems})=>{
    return (<>
    
    <div className="item-container">
        {
            todoItems.map((todoItems)=>
            <TodoItem date={todoItems.date} task={todoItems.task}/>
        )
        }
    
     
  </div>
    </>);
}
export default TodoItems