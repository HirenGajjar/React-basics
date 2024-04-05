
function TodoItem({task,date}){
    return(
        
<div className="container">
        <div className="row allrow">
        <div className="col-4">{task}</div>
        <div className="col-4">{date}</div>
        <div className="col-2 allBtn"><button className="btn btn-danger allBtn">Delete</button></div>
      </div>
      </div>
    )
}
export default TodoItem;