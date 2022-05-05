import './App.css';

import TDLTasksList from './components/TDLTasksList';
import TDLButton from './components/TDLButton';

// import staticData from './data/tasks';

import React, { useState } from 'react';

import { v4 as uuid } from 'uuid';

function App() {

  const [tasks, setTasks] = useState([]);


  function add_new_task() {

    setTasks([...tasks, {
      id: uuid(),
      content: "Aller en courses",
      status: 1,
      started: "2022-05-02",
      ended: "2022-05-03"
    }]);
  }

  function on_delete_task(id){
    setTasks(tasks.filter(task=>task.id!==id));
  }
  
  function on_edit_task(id){
    console.log('edit task')
  }


  return (
    <div className="App">

      <TDLButton label="Add" color="#43a047" icon="add" callback={()=>add_new_task()} />
      <TDLTasksList tasks={tasks} onDeleteTask={on_delete_task} onEditTask={on_edit_task} />

    </div>
  );
}

export default App;
