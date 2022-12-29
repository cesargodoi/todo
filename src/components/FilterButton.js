import React from "react";

export default function (props) {
  return (
    <li class="nav-item">
      <button
        className={`nav-link ${props.active ? 'active' : ''}`}
        onClick={() => props.setFilter(props.filter)}
      >
        {props.filter} tasks
      </button>
    </li >
  )
}