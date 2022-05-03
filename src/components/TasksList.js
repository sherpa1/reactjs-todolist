function TasksList({tasks}) {

    return (
      <div className="TasksList">
          <ul>
            {tasks.map(task => <li onClick={()=>console.log("click")}>{task.id}</li>)}
          </ul>
      </div>
    );
  }
  
  export default TasksList;