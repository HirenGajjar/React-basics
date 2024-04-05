import TodoItem from './TodoItem';

const TodoItems = ({todoItems})=>{
    return (<>
    
    <div className="item-container">
    <TodoItem date={'March - 3 -2024'} task={'Task one'}/>
    <TodoItem date={'March - 5 -2024'} task={'Task two'}/>
    
     
  </div>
    </>);
}
export default TodoItems