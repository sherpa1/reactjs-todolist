function TDLTasksList({tasks}) {

    return (
      <div className="TDLTasksList">
          <ul>
            {tasks.map(task => <li onClick={()=>console.log("click")}>{task.content}</li>)}
          </ul>
      </div>
    );
  }
  
  export default TDLTasksList;