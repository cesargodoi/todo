import React, { useState } from "react";

import { PlusLg } from "react-bootstrap-icons";

export default function Form(props) {
  const [newTask, setNewTask] = useState('');

  function handlerChange(e) {
    setNewTask(e.target.value);
  }

  function handlerSubmit(e) {
    e.preventDefault();
    props.addTask(newTask);
    setNewTask('');
  }

  return (
    <form onSubmit={handlerSubmit}>
      <div className='d-flex flex-row'>
        <div className="flex-fill me-1">
          <input
            id="new-todo-input"
            type="text"
            className='form-control form-control-lg'
            name="text"
            autoComplete="off"
            placeholder='What needs to be done?'
            value={newTask}
            onChange={handlerChange}
          />
        </div>
        <div className="text-end">
          <button type="submit" className='btn btn-lg btn-outline-primary'>
            <PlusLg />
          </button>
        </div>
      </div>
    </form>
  )
}