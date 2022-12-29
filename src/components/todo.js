import React, { useState } from "react";

import { PencilFill } from "react-bootstrap-icons";
import { TrashFill } from "react-bootstrap-icons";
import { XLg } from 'react-bootstrap-icons';
import { CheckLg } from 'react-bootstrap-icons';

export default function Todo(props) {
  const [isEditing, setIsEditing] = useState(false);

  const templateToShow = (
    <li className='list-group-item d-flex flex-row'>
      <div className='flex-fill'>
        <input id={props.id} type="checkbox" className='me-2' defaultChecked={props.completed} />
        <label htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div>
        <button type="button" className='btn btn-sm btn-outline-warning me-1'>
          <PencilFill />
        </button>
        <button type="button" className='btn btn-sm btn-outline-danger'>
          <TrashFill />
        </button>
      </div>
    </li>
  )

  const templateToEdit = (
    <form className='list-group-item d-flex flex-row'>
      <div className='flex-fill me-2'>
        <input
          id="newName"
          type="text"
          className='form-control form-control-sm'
        />
      </div>
      <div>
        <button type="button" className='btn btn-sm btn-outline-secondary me-1'>
          <XLg />
        </button>
        <button type="button" className='btn btn-sm btn-outline-primary'>
          <CheckLg />
        </button>
      </div>
    </form>
  )

  return isEditing ? templateToEdit : templateToShow;
}