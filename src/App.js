import React from 'react';
import './App.css';
import { PencilFill } from "react-bootstrap-icons";
import { TrashFill } from "react-bootstrap-icons";
import { XLg } from 'react-bootstrap-icons';
import { CheckLg } from 'react-bootstrap-icons';


function App() {
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
        <li className='list-group-item d-flex flex-row'>
          <div className='flex-fill'>
            <input id="todo-0" type="checkbox" className='me-2' defaultChecked={true} />
            <label htmlFor="todo-0">
              Eat
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
        <li className='list-group-item d-flex flex-row'>
          <div className='flex-fill'>
            <input id="todo-0" type="checkbox" className='me-2' defaultChecked={false} />
            <label htmlFor="todo-0">
              Sleep
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
        <li className='list-group-item d-flex flex-row'>
          <div className='flex-fill me-2'>
            <input id="newName" type="text" className='form-control form-control-sm' />
          </div>
          <div>
            <button type="button" className='btn btn-sm btn-outline-secondary me-1'>
              <XLg />
            </button>
            <button type="button" className='btn btn-sm btn-outline-primary'>
              <CheckLg />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default App;
