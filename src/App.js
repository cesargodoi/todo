import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import Todo from './components/Todo';
import Form from './components/Form';
import FilterButton from './components/FilterButton';

import './App.css';

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed
}

const FILTER_NAMES = Object.keys(FILTER_MAP);

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

  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map(task => (
      <Todo
        id={task.id}
        key={task.id}
        name={task.name}
        completed={task.completed}
        completeTask={completeTask}
        editTask={editTask}
        deleteTask={deleteTask}
      />
    ));

  const countTasks = taskList.length;
  const countPlural = countTasks > 1 ? 'tasks' : 'task'

  function addTask(name) {
    const newTask = { id: `td${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
  }

  function completeTask(id) {
    const adjustedTasks = tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed;
        return task
      }
      return task
    });
    setTasks(adjustedTasks);
  }

  function editTask(id, name) {
    const adjustedTasks = tasks.map(task => {
      if (task.id === id) {
        task.name = name;
        return task;
      }
      return task;
    });
    setTasks(adjustedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => task.id !== id);
    setTasks(remainingTasks)
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
