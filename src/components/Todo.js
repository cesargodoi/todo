import React, { useState } from "react";

import { PencilFill, TrashFill, XLg, CheckLg } from "react-bootstrap-icons";

export default function Todo(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(props.name);

  function handlerChange(e) {
    setName(e.target.value);
  }

  function handlerSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, name);
    setName('');
    setIsEditing(false);
  }

  const templateToShow = (
    <li className='list-group-item d-flex flex-row'>
      <div className='flex-fill'>
        <input id={props.id} type="checkbox" className='me-2' defaultChecked={props.completed} />
        <label htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div>
        <button
          type="button"
          className='btn btn-sm btn-outline-warning me-1'
          onClick={() => setIsEditing(true)}
        >
          <PencilFill />
        </button>
        <button
          type="button"
          className='btn btn-sm btn-outline-danger'
          onClick={() => props.deleteTask(props.id)}
        >
          <TrashFill />
        </button>
      </div>
    </li>
  )

  const templateToEdit = (
    <form onSubmit={handlerSubmit} className='list-group-item d-flex flex-row'>
      <div className='flex-fill me-2'>
        <input
          id="newName"
          type="text"
          className='form-control form-control-sm'
          value={name}
          onChange={handlerChange}
        />
      </div>
      <div>
        <button
          type="button"
          className='btn btn-sm btn-outline-secondary me-1'
          onClick={() => setIsEditing(false)}
        >
          <XLg />
        </button>
        <button type="submit" className='btn btn-sm btn-outline-primary'>
          <CheckLg />
        </button>
      </div>
    </form>
  )

  return isEditing ? templateToEdit : templateToShow;
}