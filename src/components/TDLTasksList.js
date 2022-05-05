import TDLTaskItem from './TDLTaskItem';

function TDLTasksList({ tasks, onDeleteTask, onEditTask }) {

  return (
    <div className="TDLTasksList">
        {tasks.map(task =>
            <TDLTaskItem key={task.id} task={task} onDelete={() => onDeleteTask(task.id)} onEdit={() => onEditTask(task.id)} />
        )}

    </div>
  );
}

export default TDLTasksList;