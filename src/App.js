import React from 'react';
import './App.css';

import Todo from './components/todo';
import Form from './components/Form';


function App(props) {
  const tasks = props.tasks.map((task) => (
    <Todo id={task.id} name={task.name} completed={task.completed} />
  ))

  const countTasks = tasks.length;
  const countPlural = countTasks > 1 ? 'tasks' : 'task'

  return (
    <div className="container">
      <h1 className='text-center mt-4 mb-4'>ToDO</h1>

      <Form />

      <div className='nav nav-tabs justify-content-center mt-4'>
        <li class="nav-item">
          <button className="nav-link active" href="#">All tasks</button>
        </li>
        <li class="nav-item">
          <button className="nav-link" href="#">Active tasks</button>
        </li>
        <li class="nav-item">
          <button className="nav-link" href="#">Completed tasks</button>
        </li>
      </div>

      <h2 id="list-heading" className='mt-4'>
        {`${countTasks} ${countPlural} remaining`}
      </h2>

      <ul aria-labelledby="list-heading" className='list-group list-group-flush mt-4'>
        {tasks}
      </ul>

    </div>
  );
}

export default App;
