import React from "react";

import { PlusLg } from "react-bootstrap-icons";

export default function Form(props) {
  return (
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
          <button type="submit" className='btn btn-lg btn-outline-primary'>
            <PlusLg />
          </button>
        </div>
      </div>
    </form>
  )
}