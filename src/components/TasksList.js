function TasksList({tasks}) {

    return (
      <div className="TasksList">
          <ul>
            {tasks.map(task => <li onClick={()=>console.log("click")}>{task.content}</li>)}
          </ul>
      </div>
    );
  }
  
  export default TasksList;