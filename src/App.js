import './App.css';

import TasksList from './components/TasksList';

import tasks from './data/tasks';

function App() {

  return (
    <div className="App">
      <TasksList tasks={tasks}/>
    </div>
  );
}

export default App;
