import React from 'react';
import './App.css';

import Todo from './components/todo';


function App(props) {
  const tasks = props.tasks.map((task) => (
    <Todo id={task.id} name={task.name} completed={task.completed} />
  ))

  return (
    <div className="container">
      <h1 className='text-center mt-4 mb-4'>ToDO</h1>

      <form className="">
        <div className='d-flex flex-row'>
          <div className="flex-fill me-1">
            <input
              id="new-todo-input"
              type="text"
              className='form-control form-control-lg'
              name="text"
              autoComplete="off"
              placeholder='What needs to be done?'
            />
          </div>
          <div className="text-end">
            <button type="submit" className='btn btn-lg btn-primary'>
              New ToDO
            </button>
          </div>
        </div>
      </form>

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
        3 tasks remaining
      </h2>

      <ul aria-labelledby="list-heading" className='list-group list-group-flush mt-4'>
        {tasks}
      </ul>

    </div>
  );
}

export default App;
