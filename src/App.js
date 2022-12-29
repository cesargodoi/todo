import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import Todo from './components/todo';
import Form from './components/Form';
import FilterButton from './components/FilterButton';

const FILTER_NAMES = ['All', 'Active', 'Completed'];

function App(props) {
  const [filter, setFilter] = useState('All')
  const [tasks, setTasks] = useState(props.tasks)

  const filterList = FILTER_NAMES.map(f => (
    <FilterButton
      key={f}
      filter={f}
      active={f === filter}
      setFilter={setFilter}
    />
  ))

  const taskList = tasks.map(task => (
    <Todo
      id={task.id}
      key={task.id}
      name={task.name}
      completed={task.completed}
    />
  ));

  const countTasks = tasks.length;
  const countPlural = countTasks > 1 ? 'tasks' : 'task'

  function addTask(name) {
    const newTask = { id: `td${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="container">
      <h1 className='text-center mt-4 mb-4'>ToDO</h1>

      <Form addTask={addTask} />

      <div className='nav nav-tabs justify-content-center mt-4'>
        {filterList}
      </div>

      <h2 id="list-heading" className='mt-4'>
        {`${countTasks} ${countPlural} remaining`}
      </h2>

      <ul aria-labelledby="list-heading" className='list-group list-group-flush mt-4'>
        {taskList}
      </ul>

    </div>
  );
}

export default App;
