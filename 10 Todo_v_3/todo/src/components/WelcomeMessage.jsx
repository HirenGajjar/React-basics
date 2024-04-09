import '../App.css';

const WelcomeMessage=({newTodoItems})=>{
    return  newTodoItems.length === 0 &&   <center className="welcome">No task left</center>;
}
export default WelcomeMessage