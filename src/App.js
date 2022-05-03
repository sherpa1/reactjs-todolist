import './App.css';

import TasksList from './components/TasksList';

function App() {

  const tasks = [
    {
      id:1,
      content: "Faire à manger",
      status: 0,
      createdAt : "2022-05-03"
    },    {
      id:1,
      content: "Faire à manger",
      status: 0,
      createdAt : "2022-05-03"
    },    {
      id:1,
      content: "Faire à manger",
      status: 0,
      createdAt : "2022-05-03"
    },    {
      id:1,
      content: "Faire à manger",
      status: 0,
      createdAt : "2022-05-03"
    },    {
      id:1,
      content: "Faire à manger",
      status: 0,
      createdAt : "2022-05-03"
    },
  ];

  return (
    <div className="App">
      <TasksList tasks={tasks}/>
    </div>
  );
}

export default App;
