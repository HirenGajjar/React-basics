function TodoItemTwo(){
    let task = 'Task 2';
    let date = 'March 4 2023';
    return(
        
<div className="container">
        <div className="row allrow">
        <div className="col-4">{task}</div>
        <div className="col-4">{date}</div>
        <div className="col-2 "><button className="btn btn-danger allBtn">Delete</button></div>
      </div>
      </div>
    )
}
export default TodoItemTwo;