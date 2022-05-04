import TDLTaskItem from './TDLTaskItem';

function TDLTasksList({tasks}) {

    return (
      <div className="TDLTasksList">
          <ul>
            {tasks.map(task => <TDLTaskItem key={task.id} task={task}/>)}
          </ul>
      </div>
    );
  }
  
  export default TDLTasksList;