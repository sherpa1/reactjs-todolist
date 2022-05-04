import './App.css';

import TDLTasksList from './components/TDLTasksList';

import tasks from './data/tasks';

function App() {

  return (
    <div className="App">
      <TDLTasksList tasks={tasks}/>
    </div>
  );
}

export default App;
