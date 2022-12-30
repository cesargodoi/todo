import React, { useEffect, useRef, useState } from "react";

import { PencilFill, TrashFill, XLg, CheckLg } from "react-bootstrap-icons";
import { usePrevious } from "../usePrevious";

export default function Todo(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(props.name);
  const editFieldRef = useRef(null);
  const editButtonRef = useRef(null);
  const wasEditing = usePrevious(isEditing);

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
        <input
          id={props.id}
          type="checkbox"
          className='me-2'
          defaultChecked={props.completed}
          onClick={() => props.completeTask(props.id)}
        />
        <label htmlFor={props.id} class={props.completed ? 'del' : ''}>
          {props.name}
        </label>
      </div>
      <div>
        <button
          type="button"
          className='btn btn-sm btn-outline-warning me-1'
          onClick={() => setIsEditing(true)}
          ref={editButtonRef}
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
          ref={editFieldRef}
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

  useEffect(() => {
    if (!wasEditing && isEditing) {
      editFieldRef.current.focus();
    }
    if (wasEditing && !isEditing) {
      editButtonRef.current.focus();
    }
  }, [wasEditing, isEditing]);

  return isEditing ? templateToEdit : templateToShow;
}