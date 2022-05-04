import './App.css';

import TDLTasksList from './components/TDLTasksList';
import TDLButton from './components/TDLButton';

import staticData from './data/tasks';

import React, { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([]);

  function onClickAdd() {
    console.log('add');
    add_new_task();
  }

  function add_new_task() {
    setTasks([...tasks,{
      id: get_next_id(),
      content: "Aller en courses",
      status: 1,
      started: "2022-05-02",
      ended: "2022-05-03"
    }]);
  }

  function get_next_id(){
    let next_id = 1;
    tasks.map(task=> {if(next_id<=task.id) next_id = task.id+1});
    return next_id;
  }

  return (
    <div className="App">
      <TDLTasksList tasks={tasks} />
      <TDLButton label="Add" color="#43a047" icon="add" callback={onClickAdd} />
    </div>
  );
}

export default App;
